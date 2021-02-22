var productList = [];

        function loadTable() {
            let table = document.querySelector('.list');
            // Delete old records
            let trList = table.querySelectorAll('tr');
            for(let i = 1; i < trList.length; i++) {
                let trEl = trList[i];
                trEl.parentElement.removeChild(trEl);
            }

            // Insert new Records
            for (let i = 0; i < productList.length; i++) {
                let x = productList[i];
                let colName = document.createElement('td');
                let colQuant = document.createElement('td');
                colName.innerText = x.name;
                colQuant.innerText = x.quant;
                let rowEl = document.createElement('tr');
                rowEl.appendChild(colName);
                rowEl.appendChild(colQuant);
                table.appendChild(rowEl);
            }
        }

        function add() {
            let nameEl = document.querySelector('.name');
            let quantEl = document.querySelector('.quant');
            let x = {
                name: nameEl.value,
                quant: quantEl.value
            };
            productList.push(x);
            loadTable();
            let list = JSON.stringify(productList);
            localStorage.setItem("list", list);
        }
        function loadData() {
            let a = localStorage.getItem("list");
            if (a) {
                productList = JSON.parse(a);
            }
        }
        