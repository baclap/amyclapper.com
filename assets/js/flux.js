'use strict';

import Alt from 'alt'

class Actions {
    constructor() {
        this.generateActions('toggleMobileNav', 'openMobileNav', 'closeMobileNav')
    }
}

class Store {
    constructor() {
        this.bindActions(this.alt.getActions('Actions'))

        this.mobileNavOpen = false
    }
    onToggleMobileNav() {
        this.mobileNavOpen = !this.mobileNavOpen
    }
    onOpenMobileNav() {
        this.mobileNavOpen = true
    }
    onCloseMobileNav() {
        this.mobileNavOpen = false
    }
}

const alt = new Alt()
alt.addActions('actions', Actions)
alt.addStore('store', Store)

const actions = alt.getActions('actions')
const store = alt.getStore('store')

export { actions, store }
