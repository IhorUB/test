const buildTeam = document.getElementById('build-team')
const items = document.querySelectorAll('.inner');


function UpdateListener(e) {
    // find all inputs and update Listener for team-blocks-inputs
    const items = document.querySelectorAll('.inner');
    items.forEach(el => el.addEventListener('click', buildTeamItems));

    //increase counter 
    const btnPlus = document.querySelectorAll('.btn-plus');
    btnPlus.forEach(el => el.addEventListener('click', increaseValue))
    //decrement counter
    const btnMinus = document.querySelectorAll('.btn-minus');
    btnMinus.forEach(el => el.addEventListener('click', decrementValue))

    //get quote 
    if (e.target.classList[1] == 'get-quote') {
        $('.get-quote').on('click', getQuote);
    }

    // if add new member
    if (e.target.classList[1] == 'add-member') {
        $('.add-member').on('click', addNewMember);
    }
}

function buildTeamItems(e) {
    // variables with html-content for dynamic team-blocks
    const devStack =
        `<div class="dev-technology animation-bl">
                    <h6>Technology</h6>
                    <div class="item">
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">Angular</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">Laravel</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">Salesforce</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">NodeJS</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">Wordpress</label>
                    </div>
                </div>`;
    const devSen =
        `<div class="dev-seniority animation-bl">
                    <h6>Seniority</h6>
                    <div class="item">
                        <label class="label_item" data-id="6750"><input type="radio" name="seniority"class="inner" value="dev-senior">Senior</label>
                        <label class="label_item" data-id="5040"><input type="radio" name="seniority"class="inner" value="dev-middle">Middle</label>
                    </div>
                </div>`;
    const btns =
        `<div class="team-btn-area animation-bl">
                    <button class="btn-calc get-quote">Get quote</button>
                    <button class="btn-calc add-member">+ Member</button>
                </div>`;
    const qaStack =
        `<div class="qa-technology animation-bl">
            <h6>Technology</h6>
                <div class="item">
                    <label class="label_item"><input type="radio" name="technology"class="inner" value="qa-tech">Manual</label>
                    <label class="label_item"><input type="radio" name="technology"class="inner" value="qa-tech">Automation</label>
                </div>
        </div>`;
    const qaSen =
        `<div class="qa-seniority animation-bl">
                    <h6>Seniority</h6>
                    <div class="item">
                        <label class="label_item" data-id="4200"><input type="radio" name="seniority"class="inner" value="qa-senior">Senior</label>
                        <label class="label_item" data-id="2520"><input type="radio" name="seniority"class="inner" value="qa-middle">Middle</label>
                    </div>
                </div>`;
    const pmSen =
        `<div class="pm-seniority animation-bl">
                    <h6>Seniority</h6>
                    <div class="item">
                        <label class="label_item" data-id="4200"><input type="radio" name="seniority"class="inner" value="pm-senior">Senior</label>
                        <label class="label_item" data-id="2520"><input type="radio" name="seniority"class="inner" value="pm-middle">Middle</label>
                    </div>
                </div>`;
    const desStack =
        `<div class="designer-technology animation-bl">
                    <h6>Technology</h6>
                    <div class="item">
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="des-tech">Web Design</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="des-tech">Graphic Design</label>
                    </div>
                </div>`;
    const desSen =
        `<div class="des-seniority animation-bl">
                    <h6>Seniority</h6>
                    <div class="item">
                        <label class="label_item" data-id="3360"><input type="radio" name="seniority"class="inner" value="des-senior">Senior</label>
                        <label class="label_item" data-id="2100"><input type="radio" name="seniority"class="inner" value="des-middle">Middle</label>
                    </div>
                </div>`;
    const handleClick = e.target.value;
    console.log(e.target)
    switch (handleClick) {
        //Developer
        case 'developer':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(devStack);
            break;
        case 'dev-tech':
            $(this).closest('.label_item').addClass('item-selected dev-value');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(devSen);
            break;
        case 'dev-senior':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'Developer',
                level: 'Senior',
                technology: $(".dev-technology .dev-value").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'dev-s-' + $(".dev-technology .dev-value").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            // update sidebar
            console.log(sessionStorage);
            storageFunction(keyMember);
            break;
        case 'dev-middle':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'Developer',
                level: 'Middle',
                technology: $(".dev-technology .dev-value").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'dev-m-' + $(".dev-technology .dev-value").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            console.log(sessionStorage);
            // update sidebar
            storageFunction(keyMember);
            break;
            //QA
        case 'qa':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(qaStack);
            break;
        case 'qa-tech':
            $(this).closest('.label_item').addClass('item-selected dev-value');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(qaSen);
            break;
        case 'qa-senior':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'QA',
                level: 'Senior',
                technology: $(".qa-technology .dev-value").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'qa-s-' + $(".dev-technology .dev-value").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            // update sidebar
            console.log(sessionStorage);
            storageFunction(keyMember);
            break;
        case 'qa-middle':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'QA',
                level: 'Middle',
                technology: $(".qa-technology .dev-value").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'qa-m-' + $(".qa-technology .dev-value").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            console.log(sessionStorage);
            // update sidebar
            storageFunction(keyMember);
            break;
            //Project Manager
        case 'pm':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(pmSen);
            break;
        case 'pm-senior':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'Project Manager',
                level: 'Senior',
                technology: '',
                price: $(this).closest('.label_item').data("id")
            }
            // push into session storage
            sessionStorage.setItem('pm-senior', JSON.stringify(teamMember));
            // update sidebar
            console.log(sessionStorage);
            storageFunction(keyMember);
            break;
        case 'pm-middle':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'Project Manager',
                level: 'Middle',
                technology: '',
                price: $(this).closest('.label_item').data("id")
            }
            // push into session storage
            sessionStorage.setItem('pm-middle', JSON.stringify(teamMember));
            // update sidebar
            console.log(sessionStorage);
            storageFunction(keyMember);
            break;
            //Designer
        case 'designer':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(desStack);
            break;
        case 'des-tech':
            $(this).closest('.label_item').addClass('item-selected dev-value');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(desSen);
            break;
        case 'des-senior':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'Designer',
                level: 'Senior',
                technology: $(".des-technology .dev-value").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'des-s-' + $(".des-technology .dev-value").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            // update sidebar
            console.log(sessionStorage);
            storageFunction(keyMember);
            break;
        case 'des-middle':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'Designer',
                level: 'Middle',
                technology: $(".des-technology .dev-value").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'des-m-' + $(".qa-technology .dev-value").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            console.log(sessionStorage);
            // update sidebar
            storageFunction(keyMember);
            break;    
    }


}
storageFunction = (member) => {
    $('.team-sidebar').css('display', 'block')
    $('.person-added').remove();
    for (let key in sessionStorage) {
        const data = JSON.parse(sessionStorage.getItem(key));

        if (!sessionStorage.hasOwnProperty(key)) {
            continue;
        } else if (sessionStorage.length > 0) {
            const addPerson =
                `<div class="person-added animation-bl" id="${key}">
                    <p class="position">${data.position}<br>
                        <span class="person-info">${data.technology} ${data.level}</span>
                    </p>
                    <div class="member-count">
                        <button class="btn-minus">-</button>
                        <input type="number" value="1" data-atrr="${data.price}" class="input-price">
                        <button class="btn-plus">+</button>
                    </div>
                </div>`
            $(".team-sidebar").prepend(addPerson);
        }
    }
}

//increaseValue 
function increaseValue() {
    const currentVal = Number($(this).prev().val()) + 1;
    $(this).prev().val(currentVal);
}
//decrement value 
function decrementValue() {
    const currentVal = Number($(this).next().val()) - 1;
    $(this).next().val(currentVal);
}


// getQuote
function getQuote() {
    const priceInputs = Array.from(document.querySelectorAll('.input-price'));
    const priceValues = priceInputs.map(el => el.dataset.atrr * el.valueAsNumber);
    const finalPrice = priceValues.reduce((a, b) => a + b, 0)
    console.log(finalPrice);
    sessionStorage.clear();

}
// add new member
function addNewMember() {
    const newSpeciality =
        `<div class="speciality animation-bl">
                    <h6>Speciality</h6>
                    <div class="item">
                        <label class="label_item"><input type="radio" name="speciality"class="inner dev" value="developer">Developer</label>
                        <label class="label_item"><input type="radio" name="speciality"class="inner" value="qa">QA</label>
                        <label class="label_item"><input type="radio" name="speciality"class="inner" value="project manager">Project Manager</label>
                        <label class="label_item"><input type="radio" name="speciality"class="inner" value="designer">Designer</label>
                    </div>
                </div>`
    $('.build-team').append(newSpeciality);
    // delete choosen technology for previous team-member
    $('.build-team').find('.item-selected').removeClass('dev-value');
    $('.build-team').find('.team-btn-area').remove();
}
// listeners 
buildTeam.addEventListener('click', UpdateListener);
items.forEach(el => el.addEventListener('click', buildTeamItems));