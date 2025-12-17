import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const TryOnModal = ({ product, close }) => {
  const { backendUrl } = useContext(ShopContext);
  const [personFile, setPersonFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handlePersonChange = (e) => {
    setPersonFile(e.target.files[0]);
  };

  const handleGenerate = async () => {
    if (!personFile) {
      toast.error("Please upload your photo first!");
      return;
    }

    const formData = new FormData();
    formData.append('personImage', personFile);
    formData.append('clothingImage', product.image[0]);

    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/api/try-on`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (res.data.success && res.data.image) {
        setGeneratedImage(res.data.image);
      } else {
        toast.error(res.data.message || 'Try-On failed!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Server error or connection issue');
    } finally {
      setLoading(false);
    }
  };

  return (
    /* OVERLAY: 
       - fixed inset-0: Covers the whole screen.
       - bg-black/40: Darkens the background slightly.
       - backdrop-blur-sm: Blurs everything behind the modal.
       - flex justify-center items-center: Centers the modal box perfectly.
    */
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      
      {/* MODAL CARD */}
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button (X) at top right for better UX */}
        <button 
          onClick={close} 
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-serif font-semibold mb-6 border-b pb-2">Virtual Try-On</h2>

        {!generatedImage ? (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 italic">Step 1: Upload a clear full-body photo of yourself.</p>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePersonChange} 
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" 
            />
            
            <button
              onClick={handleGenerate}
              disabled={loading}
              className={`w-full py-3 text-white transition-all ${loading ? "bg-gray-400" : "bg-black hover:bg-gray-800"}`}
            >
              {loading ? "Processing AI Try-On..." : "Generate Try-On"}
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm text-green-600 mb-2 font-medium">✨ Your look is ready!</p>
            <div className="border p-1 rounded-md bg-gray-50">
                <img src={generatedImage} alt="Try-On Result" className="max-w-full h-auto rounded max-h-[60vh] mx-auto" />
            </div>
            <button 
                onClick={() => setGeneratedImage(null)} 
                className="mt-4 text-xs text-orange-600 font-bold uppercase tracking-widest hover:underline"
            >
                Try another photo
            </button>
          </div>
        )}

        <div className="mt-6 pt-4 border-t flex justify-between items-center">
            <button onClick={close} className="text-sm text-gray-500 hover:text-black underline">
              Back to Product
            </button>
            <p className="text-[10px] text-gray-400 uppercase">Powered by Nito AI</p>
        </div>
      </div>
    </div>
  );
};

export default TryOnModal;