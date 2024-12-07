document.addEventListener('DOMContentLoaded', () => {
    // Buttons
    const loginButton = document.getElementById('loginButton')
    const addTaskButton = document.getElementById('addTaskButton')
    const addAppButton = document.getElementById('addAppButton')
    const addBuyButton = document.getElementById('addBuyButton')
    const deleteAllBuyButton = document.getElementById('deleteAllBuyButton')
    const addInfoButton = document.getElementById('addInfoButton')
    const menuButton = document.getElementById('menuPicture')
    const designButton = document.getElementById('desingButton')
    const addMemberButton = document.getElementById('addMemberButton')
    const removeMemberButton = document.getElementById('removeMemberButton')
    // Inputs
    const usernameIput = document.getElementById('nameInput')
    const passwordInput = document.getElementById('passwordInput')
    const taskRawInput = document.getElementById('taskInput')
    const appRawInput = document.getElementById('appInput')
    const appTerRawInput = document.getElementById('appTerInput')
    const buyRawInput = document.getElementById('buyInput')
    const infoNameInput = document.getElementById('infoNameInput')
    const infoTelInput = document.getElementById('infoTelInput')
    const taskImpInput = document.getElementById('taskImpInput')
    const taskSelect = document.getElementById('taskSelect')
    const memberRawName = document.getElementById('addMemberInput')
    const memberRemove = document.getElementById('memberList')
    // container
    const mainContainer = document.getElementById('mainField')
    const loginContainer = document.getElementById('loginField')
    const taskList = document.getElementById('taskList')
    const appList = document.getElementById('appList')
    const buyList = document.getElementById('buyList')
    const infoList = document.getElementById('infoList')
    const menuBar = document.getElementById('menuBar')
    const designList = document.getElementById('designList')
    const body = document.body
    // Arrays
    let memberList = ['Test 1', 'Test2', 'Test 3']
    memberListCreate()
    // Memberlist create
    function memberListCreate() {
        memberList.forEach(memberList => {
            const memberListElement = document.createElement('option')
            memberListElement.value = memberList
            memberListElement.textContent = memberList
            taskSelect.appendChild(memberListElement)
        })
        memberList.forEach(memberList => {
            const memberListElement = document.createElement('option')
            memberListElement.value = memberList
            memberListElement.textContent = memberList
            memberRemove.appendChild(memberListElement)
        })
    }

    // Member hinzufügen
    addMemberButton.addEventListener('click', () => {
        const memberName = memberRawName.value.trim()
        memberList.push(memberName)
        // Memberliste löschen
        taskSelect.innerHTML = ''
        memberRemove.innerHTML = ''
        // Memberliste erstellen
        memberListCreate()
    })

    // Member entfernen
    removeMemberButton.addEventListener('click', () => {
        var removeMember = memberRemove.value
        memberList = memberList.filter(item => item !== removeMember)
        // Memberlisten löschen
        taskSelect.innerHTML = ''
        memberRemove.innerHTML = ''
        // Memberliste erstellen
        memberListCreate()
    })

    // Design anzeigen
    const design = document.createElement('p')
    design.innerHTML = 'white'
    designList.appendChild(design)

    // Login, Loginfeld ausblenden, hauptfelder einblenden
    loginButton.addEventListener('click', () => {
        const username = usernameIput.value.trim()
        const password = passwordInput.value.trim()
        if (username == "admin" && password == "admin") {
            loginContainer.style.display = 'none'
            mainContainer.style.display = 'flex'
        }
        else {
            alert("Falschen Password! Bitte überprüfe deine Eingaben auf die richtigkeit.")
        }
    })

    // Aufgaben
    addTaskButton.addEventListener('click', () => {
        // Aufgabe hinzufügen
        const taskContext = taskRawInput.value.trim()
        const taskImportens = taskImpInput.value.trim()
        const task = document.createElement('li')
        var taskMember = taskSelect.value
        task.innerHTML = taskContext + ' - ' + taskMember
        // Delete Button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Löschen'
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(task)
        })
        // Alles Sichtbarmachen
        if (taskContext == "") {
            alert('Bitte gebe eine Aufgabe in das Feld ein.')
        }
        else {
            if (taskImportens > 3 || taskImportens < 0) {
                alert('Bitte gebe nur eine Wichtigkeit von maximal 3 und minimal 0 an!')
            }
            else if (taskImportens == 1) {
                task.style.color = 'red'
            }
            else if (taskImportens == 2) {
                task.style.color = 'yellow'
            }
            else if (taskImportens == 3) {
                task.style.color = 'blue'
            }
            task.appendChild(deleteButton)
            taskList.appendChild(task)
        }
    })

    // Termine 
    addAppButton.addEventListener('click', () => {
        // Termin hinzufügen
        const appContext = appRawInput.value.trim()
        const appTerContext = appTerRawInput.value.trim()
        const app = document.createElement('li')
        app.innerHTML = appContext + " - " + appTerContext
        // Delete Button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Löschen'
        deleteButton.addEventListener('click', () => {
            appList.removeChild(app)
        })
        // Schauen ob Datum leer ist, Sichtbar machen wenn nicht
        if (appTerContext == "" || appContext == "") {
            alert('Bitte Gebe ein Datum oder einen Termin ein!')
        }
        else {
            app.appendChild(deleteButton)
            appList.appendChild(app)
        }
    })

    // Einkaufliste
    addBuyButton.addEventListener('click', () => {
        // Aufgabe hinzufügen
        const buyContext = buyRawInput.value.trim()
        const buy = document.createElement('li')
        buy.innerHTML = buyContext
        // Delete Button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Löschen'
        deleteButton.addEventListener('click', () => {
            buyList.removeChild(buy)
        })
        // Alles Sichtbarmachen
        if (buyContext == "") {
            alert('Bitte gebe einen Gegenstand in das Feld ein.')
        }
        else {
            buy.appendChild(deleteButton)
            buyList.appendChild(buy)
        }
    })

    // Einkaufsliste auf einmal löschen 
    deleteAllBuyButton.addEventListener('click', () => {
        const buyListDelete = buyList
        buyListDelete.innerHTML = ''
    })

    // Kontaktdaten
    addInfoButton.addEventListener('click', () => {
        // Info karte 
        const name = infoNameInput.value.trim()
        const nummer = infoTelInput.value.trim()
        const karte = document.createElement('li')
        karte.innerHTML = name + " - " + nummer
        // Delete Button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Löschen'
        deleteButton.addEventListener('click', () => {
            infoList.removeChild(karte)
        })
        // Alles Sichtbar
        if (name == '' || nummer == '') {
            alert('Bitte füllen sie alle Felder aus!')
        }
        else {
            karte.appendChild(deleteButton)
            infoList.appendChild(karte)
        }
   })

    // MenuBar aufrufen
    menuButton.addEventListener('click', () => {
        if (menuBar.style.display == 'none') {
            menuBar.style.display = 'block'
        }
        else {
            menuBar.style.display = 'none'
        }
    }) 

    // Design ändern
    designButton.addEventListener('click', () => {
        if (body.style.backgroundColor == 'rgb(214, 170, 159)') {
            body.style.backgroundColor = 'rgb(66, 55, 54)'
            body.style.color = 'white'
            // DesignAnzeige ändern
            designList.innerHTML = ''
            const design = document.createElement('p')
            design.innerHTML = 'Dunkel'
            designList.appendChild(design)
        }
        else {
            body.style.backgroundColor = 'rgb(214, 170, 159)'
            body.style.color = 'black'
            // DesignAnzeige ändern
            designList.innerHTML = ''
            const design = document.createElement('p')
            design.innerHTML = 'Hell'
            designList.appendChild(design)
        }
    })
    
})
