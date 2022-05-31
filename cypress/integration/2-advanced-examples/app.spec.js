/// <reference types="Cypress" />

describe('E-comm', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it.skip('Should have the title "nopCommerce demo store', () => {
        cy.title().should('eq','nopCommerce demo store')
    })   
    it.skip('Validate Top Menu Link Text', function ()  {
        cy.get('.menu-toggle').click()
        cy.get('.mobile').each(($el,index) => {
            expect($el).to.contain(this.testdata.topMenuLinks[index])
        })
    })
    it.skip('Search for shoes and click on it if price is less than $30.00', function () {
        cy.shoesSelt()
        cy.scrollTo(0,800)        
        cy.get('.prices').each(function($el,index,$list){
            if($el.text() <= '$30.00'){
                cy.xpath('/html/body/div[6]/div[3]/div/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[2]/div/div[1]/a/img').click()
            }
           
        })// Verify title of the page 
        cy.title().should('eq','nopCommerce demo store. adidas Consortium Campus 80s Running Shoes')
                
    })
    it.skip('Find Popular Tag: awesome, on the page and click on it', () => {
        cy.get('body').then((body) => {
            if(body.find('a[href*="awesome"]').length > 0) {
                cy.get('a[href*="awesome"]').click()       
            }
            else{
                cy.get('[alt="nopCommerce demo store"]')
            }
        })
    })
    it('click on the lowest price product', () => {
        cy.visit('/awesome')
        cy.get('.prices').each(function($el,index,$list) {
            // read the text
            let str = $el.text()
            // create an array 
            const list = str.split(",")
            // check if the value exixts in array 
            if(list.indexOf('$75.00') == -1)
           {
               cy.get('a[href*="adobe-photoshop-cs4"]').contains('Adobe Photoshop CS4').click()
           }
            else {
                console.log('This product is not available')
            } 
         })
    })

 })
    


        
    
            


