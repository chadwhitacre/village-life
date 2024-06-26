// Create a single supabase client for interacting with your database
const { createClient } = supabase
const _supabase = createClient(
  "https://hzxekfiswadpemapvlzj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6eGVrZmlzd2FkcGVtYXB2bHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNjg0ODAsImV4cCI6MjAzNDk0NDQ4MH0.ltxOBNI3R55u0q5dGWOK2_CNqfcE8f0QDRxY6tTC1VE");

$(document).ready(async function(){
  function drawVillageListing(res) {
    res.data.forEach(function(el) {
      $('ul').append('<li>'+el.name+'</li>');
    });
  }
  _supabase.from('village').select().then(drawVillageListing);
});
