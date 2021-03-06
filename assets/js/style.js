// This is simply to remove the warning sign saying it's not defined.
/* global $ */

function resetData() {
    // Clears the input boxes, hides elements and scrolls to the top of the page for a new search. 
    document.getElementById('mapResultsFull').style.display = 'none';
    document.getElementsByClassName('selectedHotelTB')[0].value = '';
    document.getElementsByClassName('selectedPOItb')[0].value = '';
    document.getElementById('locationSearch').value = '';
    document.getElementById('poi').value = 'lodging';
    document.getElementById('MAP').style.visibility = 'hidden';
    document.getElementsByClassName('poiShow-Container')[0].style.display = 'none';
    document.getElementsByClassName('poiText-Container')[0].style.display = 'none';
    document.getElementsByClassName('mapResults-Container')[0].style.display = 'none';
    document.getElementsByClassName('interestSelectedInfo')[0].style.display = 'none';
    document.getElementById('isContainer-sH').style.display = 'none';
    document.getElementsByClassName('satNav-Container')[0].style.display = 'none';
    document.getElementById('isContainer-sPOI').style.display = 'none';
    document.getElementById('navResults').style.display = 'none';
    window.scrollTo(0, 0);
}

function resetSearch() {
    // hides elements and resets textboxes.
    $('#mapResultsFull').addClass('animated fadeIn');
    document.getElementById('mapResultsFull').style.display = 'inline-block';
    document.getElementsByClassName('selectedPOItb')[0].value = '';
    document.getElementById('navResults').style.display = 'none';
}

function showNavResults() {
    // Makes hidden elements visible when results has been confirmed. 
    $('#navResults').addClass('animated fadeIn');
    document.getElementById('navResults').style.display = 'inline';
    document.getElementById('mapResultsFull').style.display = 'none';
}

function showMAP() {
    // Makes map visible when City/town/village has been confirmed.
    $('#MAP').addClass('animated fadeIn');
    $('#mapResultsFull').addClass('animated slideInUp');
    document.getElementById('mapResultsFull').style.display = 'inline-block';
    document.getElementById('MAP').style.visibility = 'visible';
    document.getElementsByClassName('interestSelectedInfo')[0].style.display = 'inline-block';
}

function showDisplayOne() {
    // Displays the containers which hides the dropdown list and update POI's buttons and the container
    // for the selected location and navigations functions.
    $('.poiShow-Container').addClass('animated fadeIn');
    $('.poiText-Container').addClass('animated fadeIn');
    document.getElementsByClassName('poiShow-Container')[0].style.display = 'inline-block';
    document.getElementsByClassName('poiText-Container')[0].style.display = 'inline-block';
}

function showDisplayTwo() {
    // Sets the container that holds the textbox for selected Hotel and POI to inline-block 
    // but leaving the textbox for the selected POI to 'none'.
    $('.interestSelectedInfo').addClass('animated fadeIn');
    $('#isContainer-sH').addClass('animated fadeIn');
    document.getElementById('isContainer-sH').style.display = 'inline-block';
}

function showDisplayThree() {
    // Sets the container that the 'navigation' and 'reset' search button, holds the  from 'none' to inline block.
    $('.SatNav-Container').addClass('animated fadeIn');
    document.getElementsByClassName('satNav-Container')[0].style.display = 'inline-block';
}

function showDisplayFour() {
    // Shows the POI location selected text box in read only.
    $('#isContainer-sPOI').addClass('animated fadeIn');
    document.getElementById('isContainer-sPOI').style.display = 'inline-block';
}

function removeResultTable() {
    // Removes the found results table.
    document.getElementById('mapResultsFull').style.display = 'none';
}
