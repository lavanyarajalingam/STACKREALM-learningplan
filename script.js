const learningData = [
    { week: 1, day: 1, title: 'HTML Basics', goals: 'Understand basic HTML: headings, paragraphs, lists, links, and images.', task: 'Create your bio page using only HTML elements.', type: 'HTML', watch: 'HTML Full Course for Beginners', link: 'https://youtu.be/qz0aGYrrlhU?si=WBilgqRZ7U8QaHnG' },
    { week: 1, day: 2, title: 'HTML Forms & Media', goals: 'Learn forms, inputs, media tags (audio/video), and iframe.', task: 'Build a simple registration form and embed a YouTube video.', type: 'HTML', watch: 'HTML Forms Explained Simply', link: 'https://youtu.be/fNcJuPIZ2WE?si=rX5QPebHE2n77h7-' },
    { week: 1, day: 3, title: 'CSS Basics', goals: 'CSS syntax, colors, fonts, margins, padding, and borders.', task: 'Add CSS to your bio page and style it.', type: 'CSS', watch: 'CSS Basics for Beginners', link: 'https://youtu.be/1PnVor36_40?si=W75rhBjaAO-35hHZ' },
    { week: 1, day: 4, title: 'Rest Day', goals: 'Take a break, revise previous concepts if needed.', task: 'No task for today. Relax!', type: 'Rest', watch: '', link: '' },
    { week: 1, day: 5, title: 'CSS Layouts', goals: 'Flexbox, Grid basics, alignment, spacing.', task: 'Recreate a simple card layout using Flexbox or Grid.', type: 'CSS', watch: 'Flexbox in 15 Minutes', link: 'https://youtu.be/JJSoEo8JSnc?si=HN4wlKyoMtRYWK1L' },
    { week: 1, day: 6, title: 'Portfolio Build - Pt. 1', goals: 'Plan your portfolio layout: header, about, and project sections.', task: 'Create basic structure & push to GitHub.', type: 'Portfolio', watch: 'How to Start a Developer Portfolio', link: 'https://youtu.be/gYzHS-n2gqU?si=HjLjAflG2ln6GyGn' },
    { week: 1, day: 7, title: 'Portfolio Build - Pt. 2', goals: 'Add footer, responsiveness, and final styling.', task: 'Deploy your site to GitHub Pages.', type: 'Portfolio', watch: 'Deploy to GitHub Pages', link: 'https://youtu.be/HguAyYnWBuU?si=UsT0Sew0wsfXS3uv' },
    { week: 2, day: 1, title: 'JavaScript Basics', goals: 'Learn variables, console.log, alert, prompt.', task: 'Make a simple calculator using JS prompt.', type: 'JavaScript', watch: 'JS Basics for Beginners', link: 'https://youtu.be/W6NZfCO5Slk?si=PpLu2xNCVtFls5Gi' },
    { week: 2, day: 2, title: 'Conditions & Loops', goals: 'Learn if/else, switch, for, while.', task: 'Build a number guessing game.', type: 'JavaScript', watch: 'If, Else & Loops Explained', link: 'https://youtu.be/Bv5Zv5c-Ts?si=bdz3gPNdeOFT57m1' },
    { week: 2, day: 3, title: 'Functions & Arrays', goals: 'Functions, parameters, return, and arrays.', task: 'Make a todo list using array and functions.', type: 'JavaScript', watch: 'JavaScript Functions & Arrays', link: 'https://youtu.be/oigfaZ5ApsM?si=kKqxiNfD11okyh4Y' },
    { week: 2, day: 4, title: 'Rest Day', goals: 'Relax and review the previous JavaScript concepts.', task: 'No task for today. Relax!', type: 'Rest', watch: '', link: '' },
    { week: 2, day: 5, title: 'Objects & Events', goals: 'Objects, onclick, and event listeners.', task: 'Make a bio card that changes when clicked.', type: 'JavaScript', watch: 'JS Events & Objects', link: 'https://youtu.be/jS4aFq5-91M?si=2DDyFL12giQpCdtD' },
    { week: 2, day: 6, title: 'DOM Manipulation', goals: 'Learn getElementByld, querySelector, classList.', task: 'Build a light/dark mode toggler.', type: 'JavaScript', watch: 'DOM Tutorial', link: 'https://youtu.be/0ik6X4DJKCc?si=ZL6zEcKNFscadDEV' },
    { week: 2, day: 7, title: 'Final JS Project', goals: 'Combine HTML, CSS, JS into a small app.', task: 'Complete your project and deploy it.', type: 'JavaScript', watch: 'Beginner Web Project with HTML/CSS/JS', link: 'https://www.youtube.com/watch?v=Ukg_U3CnJWl' }
];

const week1CardsContainer = document.getElementById('week1-cards');
const week2CardsContainer = document.getElementById('week2-cards');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

const totalTasks = learningData.filter(d => d.type !== 'Rest').length;
let completedTasks = 0;

function createTaskCard(data) {
    const isRestDay = data.type === 'Rest';
    const card = document.createElement('div');
    card.className = `task-card bg-stone-50 rounded-xl p-5 shadow-sm border border-gray-200 flex flex-col ${isRestDay ? 'justify-center items-center' : ''}`;
    card.id = `day-${data.week}-${data.day}`;
    
    let content = `
        <div class="flex justify-between items-start mb-3">
            <h3 class="text-lg font-bold text-[#65451F]">${data.title}</h3>
            <span class="text-xs font-semibold bg-[#e0d8ce] text-[#8d7b68] px-2 py-1 rounded-full">Day ${data.day}</span>
        </div>
    `;
    
    if (isRestDay) {
        content += `<p class="text-center text-gray-500">☕<br>${data.goals}</p>`;
    } else {
        content += `
            <p class="text-sm text-gray-600 mb-3 flex-grow"><span class="font-bold">🎯 Goals:</span> ${data.goals}</p>
            <p class="text-sm text-gray-600 mb-4"><span class="font-bold">💻 Task:</span> ${data.task}</p>
        `;
        if (data.watch && data.link) {
            content += `
                <div class="mt-auto pt-3 border-t border-gray-200">
                    <p class="text-sm text-gray-600 mb-2"><span class="font-bold">📺 Watch:</span> <a href="${data.link}" target="_blank" class="text-[#8d7b68] hover:underline">${data.watch}</a></p>
                </div>
            `;
        }
        content += `
            <div class="mt-auto pt-4 border-t border-gray-200">
                <label class="flex items-center cursor-pointer">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#8d7b68] rounded border-gray-300 focus:ring-[#A4907C]">
                    <span class="ml-2 text-sm font-medium text-gray-700">Mark as Complete</span>
                </label>
            </div>
        `;
    }
    
    card.innerHTML = content;

    if (!isRestDay) {
        const checkbox = card.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            card.classList.toggle('completed', checkbox.checked);
            updateProgress();
        });
    }

    return card;
}

function updateProgress() {
    const completedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    completedTasks = completedCheckboxes.length;
    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Complete (${completedTasks}/${totalTasks} Tasks)`;
}

learningData.forEach(data => {
    const card = createTaskCard(data);
    if (data.week === 1) {
        week1CardsContainer.appendChild(card);
    } else {
        week2CardsContainer.appendChild(card);
    }
});

const tab1 = document.getElementById('tab-week1');
const tab2 = document.getElementById('tab-week2');
const content1 = document.getElementById('content-week1');
const content2 = document.getElementById('content-week2');

tab1.addEventListener('click', () => {
    tab1.classList.add('tab-active');
    tab1.classList.remove('tab-inactive');
    tab2.classList.add('tab-inactive');
    tab2.classList.remove('tab-active');
    content1.classList.remove('hidden');
    content2.classList.add('hidden');
});

tab2.addEventListener('click', () => {
    tab2.classList.add('tab-active');
    tab2.classList.remove('tab-inactive');
    tab1.classList.add('tab-inactive');
    tab1.classList.remove('tab-active');
    content2.classList.remove('hidden');
    content1.classList.add('hidden');
});

const topicCounts = learningData.filter(d => d.type !== 'Rest').reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
}, {});

const ctx = document.getElementById('focusChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: Object.keys(topicCounts),
        datasets: [{
            data: Object.values(topicCounts),
            backgroundColor: [
                '#A4907C', // HTML
                '#C8B6A6', // CSS
                '#EADBC8', // Portfolio
                '#8D7B68', // JavaScript
            ],
            borderColor: '#fdfbf8',
            borderWidth: 4,
            hoverOffset: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        family: "'Inter', sans-serif",
                        size: 14,
                    },
                    color: '#4a4a4a',
                    boxWidth: 20,
                    padding: 20
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + ' days';
                        }
                        return label;
                    }
                }
            }
        }
    }
});

updateProgress();
