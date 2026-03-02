const myLinks = [
    { name: "INFO SYSTEM", url: "https://wsinfo.wsu.ac.kr", icon: "fas fa-globe" },
    { name: "LEARNING SMART SYSTEM", url: "https://smart.wsu.ac.kr/login/index.php", icon: "fas fa-globe" },
    { name: "NEW LEARNING SMAT SYSTEM", url: "https://nsmart.wsu.ac.kr/login/canvas", icon: "fas fa-globe" },
     { name: "GUIDEBOOK V1", url: "https://dorm.wsu.ac.kr/site/dorm/images/Guidebook_v1_e.pdf", icon: "fas fa-globe" },
      { name: "ORIENTATION SLIDES", url: "https://drive.google.com/file/d/1yXHQeClte0Hf0aAtrukEIUZqrNk8fBZE/view", icon: "fas fa-globe" },
       { name: "ESSENTIALS(ACADEMICS)", url: "https://docs.google.com/presentation/d/1cZev28-sBKrJYUzzlJGM9_sugfgBkHR4/edit?slide=id.g377a37d780f_0_174#slide=id.g377a37d780f_0_174", icon: "fas fa-globe" },
        { name: "ESSENTIALS(DAEJON)", url: "https://docs.google.com/presentation/d/1TcJ1micYc6pVAmGLY8AGShBlTVQ0zxHRabWaZ_4FXtQ/edit?slide=id.g330bda187e7_0_0#slide=id.g330bda187e7_0_0://nsmart.wsu.ac.kr/login/canvas", icon: "fas fa-globe" },
        { name: "HOW TO PASS ATTENDANCE", url: "https://drive.google.com/file/d/1nsCjs2gOCOtQFo5U3vxLV9l87mULxViy/view", icon: "fas fa-globe" },
         { name: "WOOSONG'S MAP", url: "https://i.gyazo.com/3b328d0638c2750d74c0571ab677c9da.png",icon: "fas fa-globe" },
          {name: "WOOSONG'S CALENDAR", url: "https://english.wsu.ac.kr/page/index.jsp?code=eng0206&utm_source=chatgpt.com",icon: "fas fa-globe"}

];

const linkContainer = document.getElementById('link-container');

function generateLinks() {
    myLinks.forEach(link => {
        const btn = document.createElement('a');
        btn.href = link.url;
        btn.className = 'link-card preview-mode'; // Nueva clase para el diseño
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        
        // Generamos la URL de la previsualización (usando un servicio gratuito rápido)
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

document.addEventListener('DOMContentLoaded', generateLinks);