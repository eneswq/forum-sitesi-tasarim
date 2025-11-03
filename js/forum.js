// Modal işlevselliği
function setupModal() {
    const modal = document.getElementById('newTopicModal');
    const openModalBtn = document.querySelector('.new-topic-btn');
    const closeModalBtn = document.querySelector('.close-btn');
    const cancelBtn = document.querySelector('.cancel-btn');

    // Modal'ı aç
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Modal'ı kapat
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeModalBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    // Modal dışına tıklandığında kapat
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submit işlemi
    document.getElementById('newTopicForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Sayfanın yenilenmesini engelle

        // Form verilerini al
        const formData = new FormData(this);

        // Yeni konuyu ekle
        const newTopic = `
            <div class="topic-item">
                <div class="topic-icon">
                    <i class="fas fa-comment"></i>
                </div>
                <div class="topic-info">
                    <h3>
                        <a href="#">${formData.get('title')}</a>
                        <span class="new-tag">YENİ</span>
                    </h3>
                    <p>${formData.get('content')}</p>
                    <div class="topic-meta">
                        <span><i class="fas fa-user"></i> Kullanıcı</span>
                        <span><i class="fas fa-comments"></i> 0 Yorum</span>
                        <span><i class="fas fa-clock"></i> Şimdi</span>
                    </div>
                </div>
            </div>
        `;

        // Seçilen kategoriye konuyu ekle
        const categorySection = document.querySelector('.category-section');
        const topicsList = categorySection.querySelector('.topics-list');
        topicsList.insertAdjacentHTML('afterbegin', newTopic);

        // Modalı kapat
        closeModal();

        // Formu temizle
        this.reset();
    });
}

// Mobil menü işlevselliği
function setupMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});