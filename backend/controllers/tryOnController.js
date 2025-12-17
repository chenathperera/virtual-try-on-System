import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-image" });

const fileToBase64Part = (buffer, mimeType) => ({
    inline_data: { mime_type: mimeType, data: buffer.toString("base64") }
});

const tryOn = async (req, res) => {
    try {
        const personFile = req.files.personImage[0];
        const clothingImageUrl = req.body.clothingImageUrl;

        const personPart = fileToBase64Part(personFile.buffer, personFile.mimetype);
        const clothingPart = { uri: clothingImageUrl };

        const promptText = `
            Produce a realistic VIRTUAL TRY-ON result.
            Place the clothing item from image onto the person.
            Keep face, skin tone, lighting and body natural.
            Output ONLY the final edited image.
        `;

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [personPart, clothingPart, { text: promptText }] }]
        });

        const out = result.response.candidates[0].content.parts[0].inline_data;

        res.json({ success: true, image: `data:${out.mime_type};base64,${out.data}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
};

export default tryOn;
