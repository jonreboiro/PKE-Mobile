// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleSidebar');
const closeButton = document.querySelector('#sidebar .close-btn');
const content = document.querySelector('.content');

// Open and Close Sidebar
if (toggleButton) toggleButton.addEventListener('click', () => sidebar.classList.add('show'));
if (closeButton) closeButton.addEventListener('click', () => sidebar.classList.remove('show'));

// Ingeniaritza Informatikoa Submenu Logic
const submenuButtons = document.querySelectorAll('.submenu button');
const sections = document.querySelectorAll('.section');

submenuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionToShow = button.getAttribute('data-section');
        sections.forEach(section => section.classList.add('d-none'));
        document.getElementById(sectionToShow).classList.remove('d-none');
    });
});

// Calendar Logic
const calendar = document.getElementById('calendar');
if (calendar) {
    const selectedDates = new Set();
    const today = new Date();
    const days = Array.from({ length: 30 }, (_, i) => {
        const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
        return date.toISOString().split('T')[0];
    });
    calendar.innerHTML = days.map(day => `<button class="btn btn-outline-secondary m-1">${day}</button>`).join('');
    calendar.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') e.target.classList.toggle('btn-primary');
    });
}

// Quiz Logic
const quizForm = document.getElementById('quiz-form');
if (quizForm) {
    quizForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Erantzuna bidalia!');
    });
}

// Initialize Calendar Variables
let currentDate = new Date();

function renderCalendar(date) {
  const calendarDays = document.getElementById("calendarDays");
  const currentMonth = document.getElementById("currentMonth");

  // Clear Existing Calendar
  calendarDays.innerHTML = "";

  // Get Month, Year, and Day Info
  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDay = new Date(year, month, 1).getDay(); // First day of the month
  const lastDate = new Date(year, month + 1, 0).getDate(); // Last date of the month

  // Set Current Month Title
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  currentMonth.textContent = `${monthNames[month]} ${year}`;

  // Create Empty Days Before First Date
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendarDays.appendChild(emptyDiv);
  }

  // Create Days for the Current Month
  for (let day = 1; day <= lastDate; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;
    dayDiv.classList.add("day");

    // Highlight Today's Date
    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    calendarDays.appendChild(dayDiv);
  }
}

// Navigate Months
document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial Render
renderCalendar(currentDate);

        // Open the sidebar
        toggleButton.addEventListener('click', () => {
            sidebar.classList.add('show');
            content.classList.add('shifted');
        });

        // Close the sidebar
        closeButton.addEventListener('click', () => {
            sidebar.classList.remove('show');
            content.classList.remove('shifted');
        });

        // Close the sidebar when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
                sidebar.classList.remove('show');
                content.classList.remove('shifted');
            }
        });