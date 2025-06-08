document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            
            hamburger.addEventListener('click', function() {
                mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
            });
            
            // Close mobile menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.style.display = 'none';
                });
            });





                // ... (keep all existing code until the giftCards array)

    // Make functions globally accessible
    window.openDetailsModal = function(cardId) {
        const selectedCard = giftCards.find(card => card.id === cardId);
        sessionStorage.setItem('selectedCard', JSON.stringify(selectedCard));
        
        const fullCardDetails = document.getElementById('fullCardDetails');
        fullCardDetails.innerHTML = `
            <div class="card-details-img">
                <img src="${selectedCard.image}" alt="${selectedCard.brand}">
            </div>
            <div class="card-details-info">
                <h3>${selectedCard.brand}</h3>
                <p>${selectedCard.type}</p>
                <p>Value: ${selectedCard.value}</p>
                <p>Discount: ${selectedCard.discount}</p>
                <p class="card-details-price">You pay: ${calculateDiscountedPrice(selectedCard.value, selectedCard.discount)}</p>
                <p>Instant delivery via email after purchase</p>
            </div>
        `;
        
        document.getElementById('detailsModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    window.openBuyModal = function(cardId) {
        // Get the selected card
        let selectedCard;
        if (cardId) {
            selectedCard = giftCards.find(card => card.id === cardId);
        } else {
            // For the "Buy Now" button in details modal
            selectedCard = JSON.parse(sessionStorage.getItem('selectedCard'));
        }
        
        // Store in sessionStorage to access if needed
        sessionStorage.setItem('selectedCard', JSON.stringify(selectedCard));
        
        // Update card details in modal
        const cardDetails = document.getElementById('cardDetails');
        cardDetails.innerHTML = `
            <div class="card-details-img">
                <img src="${selectedCard.image}" alt="${selectedCard.brand}">
            </div>
            <div class="card-details-info">
                <h3>${selectedCard.brand}</h3>
                <p>${selectedCard.type}</p>
                <p>Value: ${selectedCard.value}</p>
                <p class="card-details-price">You pay: ${calculateDiscountedPrice(selectedCard.value, selectedCard.discount)}</p>
            </div>
        `;
        
        document.getElementById('buyModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    // Make calculate function global
    window.calculateDiscountedPrice = function(value, discount) {
        const numericValue = parseFloat(value.replace('$', ''));
        const numericDiscount = parseFloat(discount.replace('% OFF', '')) / 100;
        return '$' + (numericValue * (1 - numericDiscount)).toFixed(2);
    };

    // Update card generation to use proper onclick attributes
    function displayFilteredCards(filteredCards) {
        cardsGrid.innerHTML = '';
        if (filteredCards.length === 0) {
            cardsGrid.innerHTML = '<p class="no-results">No cards match your search criteria.</p>';
            return;
        }
        
        filteredCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <div class="card-img">
                    <img src="${card.image}" alt="${card.brand}">
                </div>
                <div class="card-content">
                    <h3 class="card-brand">${card.brand}</h3>
                    <p class="card-type">${card.type}</p>
                    <p class="card-value">${card.value}</p>
                    <span class="card-discount">${card.discount}</span>
                    <div class="card-actions">
                        <button class="btn btn-outline" onclick="openDetailsModal(${card.id})">Details</button>
                        <button class="btn btn-primary" onclick="openBuyModal(${card.id})">Buy Now</button>
                    </div>
                </div>
            `;
            cardsGrid.appendChild(cardElement);
        });
    }





            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
            
            // Load gift cards dynamically
            const cardsGrid = document.getElementById('cardsGrid');
            
            const giftCards = [
                {
                    id: 1,
                    brand: 'Amazon',
                    type: 'eGift Card',
                    value: '$100',
                    discount: '12% OFF',
                    image: 'https://logo.clearbit.com/amazon.com'
                },
                {
                    id: 2,
                    brand: 'Starbucks',
                    type: 'eGift Card',
                    value: '$50',
                    discount: '8% OFF',
                    image: 'https://logo.clearbit.com/starbucks.com'
                },
                {
                    id: 3,
                    brand: 'Walmart',
                    type: 'Physical Card',
                    value: '$200',
                    discount: '15% OFF',
                    image: 'https://logo.clearbit.com/walmart.com'
                },
                {
                    id: 4,
                    brand: 'Netflix',
                    type: 'eGift Card',
                    value: '$30',
                    discount: '5% OFF',
                    image: 'https://logo.clearbit.com/netflix.com'
                },
                {
                    id: 5,
                    brand: 'PlayStation',
                    type: 'Digital Code',
                    value: '$60',
                    discount: '10% OFF',
                    image: 'https://logo.clearbit.com/playstation.com'
                },
                {
                    id: 6,
                    brand: 'Uber',
                    type: 'eGift Card',
                    value: '$25',
                    discount: '7% OFF',
                    image: 'https://logo.clearbit.com/uber.com'
                },
                {
                    id: 7,
                    brand: 'Target',
                    type: 'Physical Card',
                    value: '$75',
                    discount: '9% OFF',
                    image: 'https://logo.clearbit.com/target.com'
                },
                {
                    id: 8,
                    brand: 'Apple',
                    type: 'eGift Card',
                    value: '$150',
                    discount: '12% OFF',
                    image: 'https://logo.clearbit.com/apple.com'
                }
            ];
            
            function loadCards() {
                cardsGrid.innerHTML = '';
                giftCards.forEach(card => {
                    const cardElement = document.createElement('div');
                    cardElement.className = 'card';
                    cardElement.innerHTML = `
                        <div class="card-img">
                            <img src="${card.image}" alt="${card.brand}">
                        </div>
                        <div class="card-content">
                            <h3 class="card-brand">${card.brand}</h3>
                            <p class="card-type">${card.type}</p>
                            <p class="card-value">${card.value}</p>
                            <span class="card-discount">${card.discount}</span>
                            <div class="card-actions">
                                <button class="btn btn-outline" onclick="openDetailsModal(${card.id})">Details</button>
                                <button class="btn btn-primary" onclick="openBuyModal(${card.id})">Buy Now</button>
                            </div>
                        </div>
                    `;
                    cardsGrid.appendChild(cardElement);
                });
            }
            
            loadCards();
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Filter functionality (simplified for frontend demo)
            const searchInput = document.querySelector('.search-box input');
            const categoryFilter = document.querySelectorAll('.filter-select')[0];
            const sortFilter = document.querySelectorAll('.filter-select')[1];
            
            searchInput.addEventListener('input', filterCards);
            categoryFilter.addEventListener('change', filterCards);
            sortFilter.addEventListener('change', filterCards);
            
            function filterCards() {
                const searchTerm = searchInput.value.toLowerCase();
                const category = categoryFilter.value;
                const sort = sortFilter.value;
                
                let filteredCards = [...giftCards];
                
                // Filter by search term
                if (searchTerm) {
                    filteredCards = filteredCards.filter(card => 
                        card.brand.toLowerCase().includes(searchTerm)
                    );
                }
                
                // Filter by category (simplified in frontend)
                if (category !== 'all') {
                    // In a real app, cards would have categories
                }
                
                // Sort cards
                switch (sort) {
                    case 'newest':
                        // Sort by newest (would use dates in real app)
                        break;
                    case 'highest':
                        // Sort by highest discount
                        filteredCards.sort((a, b) => {
                            const discountA = parseInt(a.discount);
                            const discountB = parseInt(b.discount);
                            return discountB - discountA;
                        });
                        break;
                    case 'lowest':
                        // Sort by lowest discount
                        filteredCards.sort((a, b) => {
                            const discountA = parseInt(a.discount);
                            const discountB = parseInt(b.discount);
                            return discountA - discountB;
                        });
                        break;
                    default:
                        // Default sort (popular)
                        break;
                }
                
                // Display filtered cards
                displayFilteredCards(filteredCards);
            }
            
            function displayFilteredCards(filteredCards) {
                cardsGrid.innerHTML = '';
                if (filteredCards.length === 0) {
                    cardsGrid.innerHTML = '<p class="no-results">No cards match your search criteria.</p>';
                    return;
                }
                
                filteredCards.forEach(card => {
                    const cardElement = document.createElement('div');
                    cardElement.className = 'card';
                    cardElement.innerHTML = `
                        <div class="card-img">
                            <img src="${card.image}" alt="${card.brand}">
                        </div>
                        <div class="card-content">
                            <h3 class="card-brand">${card.brand}</h3>
                            <p class="card-type">${card.type}</p>
                            <p class="card-value">${card.value}</p>
                            <span class="card-discount">${card.discount}</span>
                            <div class="card-actions">
                                <button class="btn btn-outline" onclick="openDetailsModal(${card.id})">Details</button>
                                <button class="btn btn-primary" onclick="openBuyModal(${card.id})">Buy Now</button>
                            </div>
                        </div>
                    `;
                    cardsGrid.appendChild(cardElement);
                });
            }
            
            // Load more button functionality
            const loadMoreBtn = document.querySelector('.btn-load-more');
            loadMoreBtn.addEventListener('click', function() {
                // In a real app, this would load more cards from an API
                alert('Loading more cards... This would fetch additional cards from the server in a real implementation.');
            });
            
            // Modal functionality
            const sellModal = document.getElementById('sellModal');
            const buyModal = document.getElementById('buyModal');
            const detailsModal = document.getElementById('detailsModal');
            const closeModals = document.querySelectorAll('.close-modal');
            const sellNowBtn = document.getElementById('sellNowBtn');
            const sellForm = document.getElementById('sellForm');
            const buyForm = document.getElementById('buyForm');
            
            // Open sell modal
            sellNowBtn.addEventListener('click', openSellModal);
            
            function openSellModal() {
                sellModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
            
            // Open buy modal
            function openBuyModal(cardId) {
                // Get the selected card
                let selectedCard;
                if (cardId) {
                    selectedCard = giftCards.find(card => card.id === cardId);
                } else {
                    // For the "Buy Now" button in details modal
                    selectedCard = JSON.parse(sessionStorage.getItem('selectedCard'));
                }
                
                // Store in sessionStorage to access if needed
                sessionStorage.setItem('selectedCard', JSON.stringify(selectedCard));
                
                // Update card details in modal
                const cardDetails = document.getElementById('cardDetails');
                cardDetails.innerHTML = `
                    <div class="card-details-img">
                        <img src="${selectedCard.image}" alt="${selectedCard.brand}">
                    </div>
                    <div class="card-details-info">
                        <h3>${selectedCard.brand}</h3>
                        <p>${selectedCard.type}</p>
                        <p>Value: ${selectedCard.value}</p>
                        <p class="card-details-price">You pay: ${calculateDiscountedPrice(selectedCard.value, selectedCard.discount)}</p>
                    </div>
                `;
                
                buyModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
            
            // Open details modal
            function openDetailsModal(cardId) {
                const selectedCard = giftCards.find(card => card.id === cardId);
                sessionStorage.setItem('selectedCard', JSON.stringify(selectedCard));
                
                const fullCardDetails = document.getElementById('fullCardDetails');
                fullCardDetails.innerHTML = `
                    <div class="card-details-img">
                        <img src="${selectedCard.image}" alt="${selectedCard.brand}">
                    </div>
                    <div class="card-details-info">
                        <h3>${selectedCard.brand}</h3>
                        <p>${selectedCard.type}</p>
                        <p>Value: ${selectedCard.value}</p>
                        <p>Discount: ${selectedCard.discount}</p>
                        <p class="card-details-price">You pay: ${calculateDiscountedPrice(selectedCard.value, selectedCard.discount)}</p>
                        <p>Instant delivery via email after purchase</p>
                    </div>
                `;
                
                detailsModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
            
            // Close modals
            closeModals.forEach(btn => {
                btn.addEventListener('click', () => {
                    sellModal.style.display = 'none';
                    buyModal.style.display = 'none';
                    detailsModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                });
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === sellModal) {
                    sellModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (e.target === buyModal) {
                    buyModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (e.target === detailsModal) {
                    detailsModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Form submissions
            sellForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your submission! We will contact you shortly with an offer for your gift card.');
                sellModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                sellForm.reset();
            });
            
            buyForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your purchase! Your gift card will be delivered to your email shortly.');
                buyModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                buyForm.reset();
            });
            
            function calculateDiscountedPrice(value, discount) {
                // Simple calculation for demo
                const numericValue = parseFloat(value.replace('$', ''));
                const numericDiscount = parseFloat(discount.replace('% OFF', '')) / 100;
                return '$' + (numericValue * (1 - numericDiscount)).toFixed(2);
            }
        });