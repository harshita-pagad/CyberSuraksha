const eduData = {
    en: [
        {
            title: "1. Cybersecurity",
            text: "Protecting systems and networks from digital attacks."
        },
        {
            title: "2. Cybercrime",
            text: "Illegal activities like fraud or identity theft via the web."
        },
        {
            title: "3. Cyber Breach",
            text: "Unauthorized access to private data; a digital break-in."
        },
        {
            title: "4. MitM Attack",
            text: "When an attacker intercepts your data on public networks."
        },
        {
            title: "5. Phishing",
            text: "Fake emails and messages designed to steal login credentials."
        },
        {
            title: "6. Data Retrieval",
            text: "Restoring lost files using secure offline backups."
        },
        {
            title: "7. Social Engineering",
            text: "Manipulating people into revealing confidential information."
        },
        {
            title: "8. Ransomware",
            text: "Malware that locks files and demands a ransom."
        },
        {
            title: "9. 2FA",
            text: "Using two different verification methods to access an account."
        },
        {
            title: "10. Zero-Day",
            text: "A software vulnerability that is not yet known to the vendor."
        },
        {
            title: "11. Encryption",
            text: "Transforming data so unauthorized people cannot read it."
        }
    ],

    hi: [
        {
            title: "1. साइबर सुरक्षा",
            text: "सिस्टम और नेटवर्क को डिजिटल हमलों से बचाना।"
        },
        {
            title: "2. साइबर अपराध",
            text: "वेब के माध्यम से धोखाधड़ी या पहचान की चोरी जैसी अवैध गतिविधियाँ।"
        },
        {
            title: "3. साइबर ब्रीच",
            text: "निजी डेटा तक अनधिकृत पहुँच।"
        },
        {
            title: "4. MitM हमला",
            text: "जब कोई हमलावर सार्वजनिक नेटवर्क पर डेटा को बीच में रोकता है।"
        },
        {
            title: "5. फिशिंग",
            text: "लॉगिन जानकारी चुराने के लिए भेजे गए नकली ईमेल या संदेश।"
        },
        {
            title: "6. डेटा पुनर्प्राप्ति",
            text: "सुरक्षित बैकअप से खोई हुई फ़ाइलों को वापस प्राप्त करना।"
        },
        {
            title: "7. सोशल इंजीनियरिंग",
            text: "लोगों को गोपनीय जानकारी देने के लिए बहकाना।"
        },
        {
            title: "8. रैनसमवेयर",
            text: "फ़ाइलों को लॉक करके फिरौती माँगने वाला मैलवेयर।"
        },
        {
            title: "9. 2FA",
            text: "खाते में प्रवेश के लिए दो सत्यापन विधियों का उपयोग।"
        },
        {
            title: "10. ज़ीरो-डे",
            text: "एक सॉफ़्टवेयर कमजोरी जो विक्रेता को अभी ज्ञात नहीं है।"
        },
        {
            title: "11. एन्क्रिप्शन",
            text: "डेटा को इस तरह बदलना कि अनधिकृत लोग उसे पढ़ न सकें।"
        }
    ],

    kn: [
        {
            title: "1. ಸೈಬರ್ ಭದ್ರತೆ",
            text: "ಡಿಜಿಟಲ್ ದಾಳಿಗಳಿಂದ ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು ನೆಟ್‌ವರ್ಕ್‌ಗಳನ್ನು ರಕ್ಷಿಸುವುದು."
        },
        {
            title: "2. ಸೈಬರ್ ಅಪರಾಧ",
            text: "ವೆಬ್ ಮೂಲಕ ವಂಚನೆ ಅಥವಾ ಗುರುತಿನ ಕಳ್ಳತನದಂತಹ ಅಕ್ರಮ ಚಟುವಟಿಕೆಗಳು."
        },
        {
            title: "3. ಸೈಬರ್ ಬ್ರೀಚ್",
            text: "ಖಾಸಗಿ ಮಾಹಿತಿಗೆ ಅನಧಿಕೃತ ಪ್ರವೇಶ."
        },
        {
            title: "4. MitM ದಾಳಿ",
            text: "ಸಾರ್ವಜನಿಕ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ದಾಳಿಕೋರರು ಡೇಟಾವನ್ನು ಮಧ್ಯದಲ್ಲಿ ತಡೆದಾಗ."
        },
        {
            title: "5. ಫಿಶಿಂಗ್",
            text: "ಲಾಗಿನ್ ಮಾಹಿತಿಯನ್ನು ಕದಿಯಲು ಕಳುಹಿಸುವ ನಕಲಿ ಇಮೇಲ್‌ಗಳು ಅಥವಾ ಸಂದೇಶಗಳು."
        },
        {
            title: "6. ಡೇಟಾ ಮರುಪಡೆಯುವಿಕೆ",
            text: "ಸುರಕ್ಷಿತ ಬ್ಯಾಕಪ್ ಬಳಸಿ ಕಳೆದುಹೋದ ಫೈಲ್‌ಗಳನ್ನು ಮರಳಿ ಪಡೆಯುವುದು."
        },
        {
            title: "7. ಸೋಶಿಯಲ್ ಇಂಜಿನಿಯರಿಂಗ್",
            text: "ರಹಸ್ಯ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು ಜನರನ್ನು ಮೋಸಗೊಳಿಸುವುದು."
        },
        {
            title: "8. ರಾನ್ಸಮ್‌ವೇರ್",
            text: "ಫೈಲ್‌ಗಳನ್ನು ಲಾಕ್ ಮಾಡಿ ಹಣ ಕೇಳುವ ಮಾಲ್‌ವೇರ್."
        },
        {
            title: "9. 2FA",
            text: "ಖಾತೆಗೆ ಪ್ರವೇಶಿಸಲು ಎರಡು ಪರಿಶೀಲನಾ ವಿಧಾನಗಳನ್ನು ಬಳಸುವುದು."
        },
        {
            title: "10. ಝೀರೋ-ಡೇ",
            text: "ಸಾಫ್ಟ್‌ವೇರ್ ತಯಾರಕರಿಗೆ ಇನ್ನೂ ತಿಳಿದಿಲ್ಲದ ದುರ್ಬಲತೆ."
        },
        {
            title: "11. ಎನ್‌ಕ್ರಿಪ್ಶನ್",
            text: "ಅನಧಿಕೃತರು ಓದಲಾಗದಂತೆ ಡೇಟಾವನ್ನು ಪರಿವರ್ತಿಸುವುದು."
        }
    ]
};

let currentLang = "en";

function setLang(event, lang) {
    if (!eduData[lang]) return;

    currentLang = lang;

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.remove("active");
    });

    event.currentTarget.classList.add("active");

    renderEducation();
}

function renderEducation() {
    const content = document.getElementById("learning-content");

    if (!content) return;

    content.replaceChildren();

    eduData[currentLang].forEach(topic => {
        const card = document.createElement("article");
        card.className = "info-card";

        const heading = document.createElement("h3");
        heading.textContent = topic.title;

        const paragraph = document.createElement("p");
        paragraph.textContent = topic.text;

        card.append(heading, paragraph);
        content.appendChild(card);
    });
}

function showTab(id) {
    const selectedTab = document.getElementById(id);

    if (!selectedTab) {
        console.error("Tab not found:", id);
        return;
    }

    document.querySelectorAll(
        "#main-view .container, #main-view iframe"
    ).forEach(element => {
        element.classList.remove("active");
    });

    selectedTab.classList.add("active");

    document.querySelectorAll("#sidebar .game-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.tab === id
        );
    });
}

// Initialize the learning center.
renderEducation();