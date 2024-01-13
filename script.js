const fetchQuotes = async () => {
    try {
        let author = document.querySelector('.author');
        let quote = document.querySelector('.quote');
        
        let response = await fetch("https://thatsthespir.it/api", { mode: 'cors' });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();

        
        if (data.hasOwnProperty('author') && data.hasOwnProperty('quote')) {
            author.innerHTML = data.author;
            quote.innerHTML = data.quote;
        } else {
            console.error("Invalid response format:", data);
        }
    } catch (error) {
        console.error("There was an error!", error);
    }
};


document.getElementById('Qbtn').addEventListener('click', fetchQuotes);

fetchQuotes();
