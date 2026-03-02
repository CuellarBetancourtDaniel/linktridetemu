const myLinks = [
    { name: "INFO SYSTEM", url: "https://wsinfo.wsu.ac.kr", icon: "fas fa-university" },
    { name: "LEARNING SMART SYSTEM", url: "https://smart.wsu.ac.kr/login/index.php", icon: "fas fa-graduation-cap" },
    { name: "NEW LEARNING SMART SYSTEM", url: "https://nsmart.wsu.ac.kr/login/canvas", icon: "fas fa-laptop-code" },
    { name: "GUIDEBOOK V1", url: "https://dorm.wsu.ac.kr/site/dorm/images/Guidebook_v1_e.pdf", icon: "fas fa-book" },
    { name: "ORIENTATION SLIDES", url: "https://drive.google.com/file/d/1yXHQeClte0Hf0aAtrukEIUZqrNk8fBZE/view", icon: "fas fa-file-powerpoint" },
    { name: "HOW TO PASS ATTENDANCE", url: "https://drive.google.com/file/d/1nsCjs2gOCOtQFo5U3vxLV9l87mULxViy/view", icon: "fas fa-check-circle" },
    { name: "WOOSONG'S MAP", url: "https://i.gyazo.com/3b328d0638c2750d74c0571ab677c9da.png", icon: "fas fa-map-marked-alt" },
    { name: "WOOSONG'S CALENDAR", url: "https://english.wsu.ac.kr/page/index.jsp?code=eng0206", icon: "fas fa-calendar-alt" }
];

// --- Generar Links ---
const linkContainer = document.getElementById('link-container');

function generateLinks() {
    myLinks.forEach(link => {
        const btn = document.createElement('a');
        btn.href = link.url;
        btn.className = 'link-card';
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        
        const previewUrl = `https://image.thum.io/get/width/400/crop/800/${link.url}`;

        btn.innerHTML = `
            <div class="preview-img-container">
                <img src="${previewUrl}" alt="Preview" class="link-preview-img">
            </div>
            <div class="link-content">
                <i class="${link.icon}"></i>
                <span>${link.name}</span>
            </div>
        `;
        linkContainer.appendChild(btn);
    });
}

// --- Lógica de Pestañas ---
function showSection(section) {
    const linksSec = document.getElementById('links-section');
    const convSec = document.getElementById('converter-section');
    const btnLinks = document.getElementById('btn-links');
    const btnConv = document.getElementById('btn-converter');

    if (section === 'links') {
        linksSec.style.display = 'block';
        convSec.style.display = 'none';
        btnLinks.classList.add('active');
        btnConv.classList.remove('active');
    } else {
        linksSec.style.display = 'none';
        convSec.style.display = 'block';
        btnConv.classList.add('active');
        btnLinks.classList.remove('active');
    }
}

// --- Lógica del Conversor (Tasas Aproximadas) ---
function convertCurrency() {
    const krw = document.getElementById('krw-input').value;
    
    // Tasa: 1 KRW ≈ 0.00070 USD | 1 KRW ≈ 0.0120 MXN
    //       1 USD ≈ 1419 KRW    | 1419 KRW ≈ 17.06 MXN
    const rateUSD = 0.00070; 
    const rateMXN = 0.0120;   

    if (krw && krw > 0) {
        document.getElementById('usd-result').innerText = `$${(krw * rateUSD).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} USD`;
        document.getElementById('mxn-result').innerText = `$${(krw * rateMXN).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} MXN`;
    } else {
        document.getElementById('usd-result').innerText = `$0.00`;
        document.getElementById('mxn-result').innerText = `$0.00`;
    }
}

document.addEventListener('DOMContentLoaded', generateLinks);
