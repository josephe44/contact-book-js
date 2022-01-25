// Contact Class
class Contact {
  constructor(firstName, lastName, email, phoneNumber) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phoneNumber = phoneNumber
  }
}

// UI Class
class UI {
  // Add Contact to list
  addContactToList(contact) {
    const list = document.getElementById('contact-list')
    // create tr Element
    const row = document.createElement('div')
    // Add class Name
    row.className = 'contact-card'
    // Insert cols
    row.innerHTML = `
    <div class='one-third column'>${contact.firstName} ${contact.lastName}</div>
    <div class='one-third column'>${contact.email}</div>
    <div class='one-third column'>${contact.phoneNumber}
      <span><input type="btn" value="Delete" class="delete"/></span>
    </div>
    `
    list.appendChild(row)
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div')
    // Add classes
    div.className = `alert ${className}`
    // Add text
    div.appendChild(document.createTextNode(message))
    // Get parent
    const container = document.querySelector('.container')
    // Get form
    const form = document.querySelector('#contact-form')
    // Insert alert
    container.insertBefore(div, form)
    // Timeout after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove()
    }, 500)
  }

  // Delete Book
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.parentElement.remove()
    }
  }

  // Clear Fields
  clearFields() {
    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phoneNumber').value = ''
  }
}

// Event Listener
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    // Get Form Values
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phoneNumber').value

    // Instantiate Contact
    const contact = new Contact(firstName, lastName, email, phone)

    // Instantiate UI
    const ui = new UI()
    console.log(ui)

    // Validate
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      phoneNumber === ''
    ) {
      // Error alert
      ui.showAlert('Please fill in all fields', 'error')
    } else {
      // Add book to list
      ui.addContactToList(contact)

      // Show success
      ui.showAlert('Contact Added', 'success')

      // Clear fields
      ui.clearFields()
    }

    e.preventDefault()
  })

// Event Listener for delete
document.getElementById('contact-list').addEventListener('click', function (e) {
  // Instantiate UI
  const ui = new UI()

  // Delete book
  ui.deleteBook(e.target)

  // Show message
  ui.showAlert('Contact Removed', 'removed')
  e.preventDefault()
})

// Event Listener for Dark/Light theme
const darkChanger = document.getElementById('theme')
const icon = document.createElement('i')
icon.className = 'fas fa-moon'
darkChanger.appendChild(icon)
// Creating light icon

darkChanger.addEventListener('click', function () {
  if (icon.className === 'fas fa-moon') {
    let lightMode = document.body
    lightMode.className = 'dark'
    icon.className = 'fas fa-sun'
    console.log(icon.className)
  } else {
    let lightMode = document.body
    lightMode.className = 'light'
    icon.className = 'fas fa-moon'
    console.log(icon.className)
  }
})

// // darkTheme
function darkMode() {
  icon.className = 'fas fa-moon'
  let darkMode = document.body
  darkMode.classList.add('light')
}

// // lightTheme
// function lightTheme() {
//   icon.className = 'fas fa-moon'
// }
