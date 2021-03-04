function printPascalTriangle(){ //вывод триугольника
    document.getElementById('pascalTriangleDiv').innerHTML = '';
    var rows = document.getElementById('triangleNumberOfRows').value;
    if(rows<0||rows>99){
        rows = 15;
        document.getElementById('triangleNumberOfRows').value = rows;
    }

    var arr = generatePascalTriangle(rows);
    var blockWidth = arr[arr.length - 1][Math.floor(arr[arr.length - 1].length/2)].toString().length;
    for(var i=0; i<arr.length; i++){
        var div = document.createElement('div');
        div.className = "divblock";
        div.style.width = (rows*blockWidth)+'em';
        for(var j = 0; j<arr[i].length; j++){
            var span = document.createElement('span');
            span.innerHTML = arr[i][j];
            span.className = "block";
            span.style.width = blockWidth + 'em';
            div.appendChild(span);
        }
        document.getElementById('pascalTriangleDiv').appendChild(div);
    }

}

function generatePascalTriangle(n){ //расчет триугольника
    var arr = [];
    for(var i = 0; i<n; i++){
        arr[i] = [];
        for(var j = 0; j<=i; j++){
            if(j==i){
                arr[i].push(1);
            } else{ //или добавить очередную пару элементов
                var pair = (!!arr[i-1][j-1] ? arr[i-1][j-1] : 0) + (!!arr[i-1][j] ? arr[i-1][j] : 0);
                arr[i].push(pair);

            }
        }
    }
    return arr;
}