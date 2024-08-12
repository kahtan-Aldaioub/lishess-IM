// Wait until the page has fully loaded
window.addEventListener('load', function() {
    // Get all <a> tags with the class 'user-link'
    const userLinkElements = document.querySelectorAll('a.user-link');

    // Iterate over each <a> tag
    userLinkElements.forEach(link => {
        // Check if the <a> tag's text content matches the username
        if (link.textContent.trim() === 'KahtanAldaioub') {
            // Create the IM span
            const imSpan = document.createElement('span');
            imSpan.className = 'utitle';
            imSpan.title = 'International Master';
            imSpan.textContent = 'IM ';
            
            // Insert the IM span before the username text node within the <a> tag
            link.insertBefore(imSpan, link.firstChild);
        }
    });

    // Optionally, you can also handle the <span> tags if needed
    const userSpanElements = document.querySelectorAll('span.user-link');
    
    userSpanElements.forEach(span => {
        if (span.textContent.trim() === 'KahtanAldaioub') {
            span.innerHTML = `
                <span class="online user-link" data-href="/@/KahtanAldaioub">
                    <i class="line"></i>
                    <span class="utitle" title="International Master">IM </span>
                    KahtanAldaioub
                    <a href="/account/profile" title="Set your flair">
                        <img class="uflair" src="https://lichess1.org/assets/______2/flair/img/symbols.red-triangle-pointed-down.webp">
                    </a>
                </span>
            `;
        }
    });
});
