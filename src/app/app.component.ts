import { Component } from '@angular/core';
import { DataService } from './chart/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private chartData: any[] = [];

    dataLevel1Category = [{"id":156,"name":"Psagot","supplierCount":1280,"spend":1910525131.97,"spendCurrent":1910525131.97,"spendPrevious":653804598.64,"percentageDifference":1.922165,"isSelected":false},{"id":158,"name":"Quality Distribution","supplierCount":1287,"spend":1787349615.39,"spendCurrent":1787349615.39,"spendPrevious":1738953070.5,"percentageDifference":0.02783,"isSelected":false},{"id":157,"name":"Qualitest Pharmaceuticals","supplierCount":1263,"spend":1288145283.04,"spendCurrent":1288145283.04,"spendPrevious":7632438109.14,"percentageDifference":-0.831228,"isSelected":false},{"id":153,"name":"Phillips-Van Heusen Corporation","supplierCount":1292,"spend":1141226688.72,"spendCurrent":1141226688.72,"spendPrevious":965891917.2,"percentageDifference":0.181526,"isSelected":false},{"id":154,"name":"Plantasjen","supplierCount":1279,"spend":1108250674.92,"spendCurrent":1108250674.92,"spendPrevious":1024941065.84,"percentageDifference":0.081282,"isSelected":false},{"id":155,"name":"Promethean","supplierCount":1279,"spend":953433348.62,"spendCurrent":953433348.62,"spendPrevious":2893425480.83,"percentageDifference":-0.670483,"isSelected":false},{"id":151,"name":"Orange Switzerland","supplierCount":1295,"spend":889866794.79,"spendCurrent":889866794.79,"spendPrevious":470416252.21,"percentageDifference":0.891658,"isSelected":false},{"id":152,"name":"Paradigm Ltd","supplierCount":1289,"spend":790315906.07,"spendCurrent":790315906.07,"spendPrevious":1109705492.43,"percentageDifference":-0.287815,"isSelected":false},{"id":150,"name":"One Call Care Management","supplierCount":1298,"spend":632936630.05,"spendCurrent":632936630.05,"spendPrevious":654136077.47,"percentageDifference":-0.032409,"isSelected":false},{"id":149,"name":"NXP Semiconductors","supplierCount":1300,"spend":626773395.04,"spendCurrent":626773395.04,"spendPrevious":510565346.79,"percentageDifference":0.227606,"isSelected":false},{"id":145,"name":"Mölnlycke Health Care","supplierCount":1279,"spend":597116058.6,"spendCurrent":597116058.6,"spendPrevious":272511858.67,"percentageDifference":1.191156,"isSelected":false},{"id":147,"name":"New Look Group","supplierCount":300,"spend":413383602.39,"spendCurrent":413383602.39,"spendPrevious":366075029.98,"percentageDifference":0.129231,"isSelected":false},{"id":148,"name":"Norcraft Companies, L.P.","supplierCount":1285,"spend":408107601.66,"spendCurrent":408107601.66,"spendPrevious":509729823.95,"percentageDifference":-0.199365,"isSelected":false},{"id":146,"name":"Netrada Holding","supplierCount":1284,"spend":406661922.27,"spendCurrent":406661922.27,"spendPrevious":278956611.99,"percentageDifference":0.457796,"isSelected":false},{"id":143,"name":"MagnaCare Holdings","supplierCount":1282,"spend":305347090.36,"spendCurrent":305347090.36,"spendPrevious":181336849.73,"percentageDifference":0.683866,"isSelected":false},{"id":144,"name":"Marken","supplierCount":1290,"spend":282592946.34,"spendCurrent":282592946.34,"spendPrevious":311183163.96,"percentageDifference":-0.091876,"isSelected":false},{"id":142,"name":"LR Health and Beauty Systems GmbH","supplierCount":1287,"spend":253163244.93,"spendCurrent":253163244.93,"spendPrevious":257178479.47,"percentageDifference":-0.015613,"isSelected":false},{"id":141,"name":"King","supplierCount":1284,"spend":217774948.76,"spendCurrent":217774948.76,"spendPrevious":197772088.97,"percentageDifference":0.10114,"isSelected":false},{"id":173,"name":"TDC","supplierCount":1284,"spend":215983079.17,"spendCurrent":215983079.17,"spendPrevious":200246904.61,"percentageDifference":0.078583,"isSelected":false}];

    dataLevel2Category = [
        {
            name: 'dasasdf sd sdv ',
            supplier: 'Supplier 1',
            spend: 999.8765,
            change: 99,
            progress: 66
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            supplier: 'Supplier 2',
            spend: 91,
            change: -111,
            progress: 33
        },
        {
            name: 'sdfs df sdfs df',
            supplier: 'Supplier 3',
            spend: 191,
            change: 37,
            progress: 70
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            supplier: 'Supplier 4',
            spend: 300,
            change: 45,
            progress: 99
        }
    ];

    dataSupplier = [
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        },
        {
            name: 'dasasdf sd sdv ',
            status: true,
            spend: 4,
            total: 0.5,
            progress: 32
        },
        {
            name: 'sdf sdf sdf sdf sdf ',
            status: false,
            spend: 6,
            total: 0.5,
            progress: 13
        },
        {
            name: 'sdfs df sdfs df',
            status: false,
            spend: 1,
            total: 0.2,
            progress: 28
        },
        {
            name: ' sdfs dfsdf sdf dsf',
            status: true,
            spend: 3,
            total: 0.1,
            progress: 65
        }
    ];

    constructor(private dataService: DataService) {
        this.getData();
    }

    getData() {
        this.dataService.getLineChartData().subscribe((response) => {
            this.chartData = response;
        });
    }
    ferfreshData() {
        this.dataService.getLineChartData().subscribe((response) => {
           this.chartData = response;
        });
    }
}
