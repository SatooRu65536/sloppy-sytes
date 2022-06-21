const min_e = document.getElementById('min');
const max_e = document.getElementById('max');
const num_e = document.getElementById('num');
const display_e = document.getElementById('display');
const cb = document.getElementById('cb');

function start() {
    while (display_e.firstChild) {
        display_e.removeChild(display_e.firstChild)
    }

    let min = Number(min_e.value);
    let max = Number(max_e.value);
    let num = Number(num_e.value);

    if (min > max) {
        tmp = min;
        min = max;
        max = tmp;

        min_e.value = min;
        max_e.value = max;
    }
    if (num > max - min + 1) {
        num = max - min + 1;
        console.log(num);

        num_e.value = num;
    }

    nums = []
    let new_element = document.createElement('p');

    if (cb.checked) {
        let addnum = null;

        do {
            console.log('!!!');
            addnum = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (nums.includes(addnum));

        nums.push(addnum)
        console.log(addnum, '←');

        new_element = document.createElement('span');
        new_element.textContent = addnum;
        new_element.className = 'nums';
        display_e.appendChild(new_element);
    } else {
        for (let i = 0; i < num; i++) {
            let addnum = null;

            do {
                addnum = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (nums.includes(addnum));

            nums.push(addnum)
            console.log(addnum, '←');

            new_element = document.createElement('span');
            new_element.textContent = addnum;
            new_element.className = 'nums';
            display_e.appendChild(new_element);
        }
    }
    console.log('fin');
}

function next() {
    if (cb.checked) {
        let new_element = document.createElement('p');
        let addnum = null;
        let min = Number(min_e.value);
        let max = Number(max_e.value);
        let num = Number(num_e.value);
        console.log(min, max, num);

        if (nums.length < num) {
            do {
                addnum = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (nums.includes(addnum));
            nums.push(addnum)
            console.log(addnum);

            new_element = document.createElement('span');
            new_element.textContent = addnum;
            new_element.className = 'nums';
            display_e.appendChild(new_element);
            console.log(nums);
        } else if (!document.getElementById('fin')) {
            new_element = document.createElement('span');
            new_element.textContent = 'fin!';
            new_element.id = 'fin';
            display_e.appendChild(new_element);
            console.log(nums);
        }
    }
}

document.addEventListener('keypress', (event) => {
    next()
  });