# Odia-OCR: Odia Text Reader and Translator

*Odia-OCR* is an Optical Character Recognition (OCR) and Translation tool designed to extract text from images containing *Odia* language and translate it into English. It also provides audio versions of both the Odia text and its English translation, making it accessible to people who may not understand the Odia language. This project can handle Odia quotes, songs, general text, and any other content written in Odia language.

## Features

- *Input*: An image containing text in Odia language (e.g., quotes, songs, etc.).
- *Output*:
  - Extracted Odia text.
  - Translated English text.
  - Audio versions of both the Odia text and English translation.
  
## Project Overview

This project uses OCR technology to extract text from images in Odia language. The text is then translated into English, and audio versions are generated using the Google Text-to-Speech (gTTS) library. This makes the content accessible to both speakers of Odia language and non-speakers who can read the English translation or listen to the audio.

### Key Technologies:
- *OCR (Optical Character Recognition)*: Extracts text from images using pytesseract.
- *Translation*: Translates the Odia text into English using googletrans.
- *Text-to-Speech (TTS)*: Generates audio of both Odia text and English translation using gTTS.

## Installation

To run this project, you'll need Python 3.x installed along with the necessary libraries.

### Prerequisites:
- Python 3.x
- Libraries: pytesseract, googletrans, gTTS, Pillow

### Step-by-Step Installation:

1. Clone this repository to your local machine:

   ```markdown
   git clone https://github.com/yourusername/Odia-OCR.git
   cd Odia-OCR
