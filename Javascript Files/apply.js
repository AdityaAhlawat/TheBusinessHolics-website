const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}
document.getElementById('guest').onclick = function(){
    alert("Contact us in the contact page!")
}