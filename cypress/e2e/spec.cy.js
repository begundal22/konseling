describe('menambah mahasiswa', () => {
  it('login', () => {
    cy.visit('http://localhost/konseling/session/login.php')
  // isi form email 
  cy.get('input[name="username"]').type('admin')

  // isi form password
  cy.get('input[name="password"]').type('admin123')

  // press tombol bernama login
  cy.get('button[name="login"]').click()

  // masuk halaman admin
  cy.visit('http://localhost/konseling/admin/index.php')

  // cari tombol a href berlabel "data mahasiswa"
  cy.get('a[href="mahasiswa.php"]').click()

  // cari data dipencarian
  cy.get('input[name="keyword"]').type('3C')

  // klik tombol pencarian
  cy.get('button[name="cari"]').click()

   // cari tombol a href berlabel "data mahasiswa"
   cy.get('a[href="edit-mahasiswa.php?nim=16319062"]').click()

   cy.get('[type="text"]').clear() // Clear text input
   cy.get('[type="number"]').clear() // Clear text input
   cy.focused().clear() // Clear focused input/text

   cy.get('input[name="username"]').type('Dio Aulia Ari Kurnia Sandi')
   cy.get('input[name="password"]').type('dio123')
   cy.get('input[name="nama"]').type('Dio Aulia Ari Kurnia Sandi')
   cy.get('input[name="nohp"]').type('881122223333')

   // click edit button
    cy.get('button[name="edit"]').click()
   
  //  cy.visit('http://localhost/konseling/admin/edit-mahasiswa.php?nim=16319062')


  //  cy.visit('http://localhost/konseling/admin/mahasiswa.php')
   
  
  // // cari btn tambah
  // cy.get('[id=btn-show]').click()

  // // input username
  // cy.get('input[id="username"]').type('zadah')
  
  // // input password
  // cy.get('input[id="password"]').type('zadah123')

  // // input gambar
  // cy.get('input[id="foto"]').then(subject =>{
  //   cy.fixture('profile.png', 'base64')
  //   .then(Cypress.Blob.base64StringToBlob)
  //   .then(blob => {
  //     const el = subject[0]
  //     const testFile = new File([blob], 'gambar.jpg', { type: 'image/png' })
  //     const dataTransfer = new DataTransfer()
  //     dataTransfer.items.add(testFile)
  //     el.files = dataTransfer.files
  //     cy.wrap(subject).trigger('change', { force: true })
  //   })
  // })

  // // input nama
  // cy.get('input[id="nama"]').type('Muhammad Hamamiy Zadah')

  // // input no hp
  // cy.get('input[id="nohp"]').type('089677513894')

  // // input NIM
  // cy.get('input[id="nim"]').type('2041720028')

  // // input no hp
  // cy.get('select[id="kelas"]').select('3c').should('have.value', '3c')

  // // press tombol bernama registrasi
  // cy.get('button[name=register]').click()

  // //masuk halaman tambah mahasiswa
  // cy.visit('http://localhost/konseling/admin/mahasiswa.php')

})
})