barcodeValue_1 = '8 9056 10 109353'
barcodeText_1 = '8 9056 10 109353'
JsBarcode("#barcode1", barcodeValue_1, {
    textAlign: "center",
    textPosition: "bottom",
    font: "cursive",
    fontOptions: "bold",
    fontSize: 30,
    textMargin: 0,
    text: barcodeText_1,
});

barcodeValue_2 = '(01)08905610109353(21)0054'
barcodeText_2 = '(01)08905610109353(21)0054'
JsBarcode("#barcode2", barcodeValue_2, {
    textAlign: "center",
    textPosition: "bottom",
    font: "cursive",
    fontOptions: "bold",
    fontSize: 30,
    textMargin: 0,
    text: barcodeText_2,
});

let date = '02/2022'
let styleinfo = 'VSTFWSLBB60883'
let storeReferenceInfo = '32'
let anchorValue = 'Waist'
let anchorValueInfo = '85 cm'
let outseamLength = 'Outseam Length'
let outseamLengthoInfo = '1.10 m'
let productType = 'TROUSER'
let netQuantityInfo = '1 N'
let price='Rs.2399.00'
let address=`YK Creation.
No. 13, S. M Road, Jalahalli West,
Bangalore, Karnataka-560 057.`
let email = 'support@monksofmethod.com'
let customerCareAddress=`Monks of Method,
3rd Floor, Gateway by UKN, Siddapura Main Road, Near Spectra Palmwoods Apartments, Siddapura, Bangalore 560066`

template = `<div style="display: flex;">
                <span>Month & Year of Manufacture on <span style="font-weight: bold;">${date}</span></span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 16px; margin-bottom:16px;">
                <div style="display: flex;">
                    <div style="display: flex; width: 25%;">Style</div>
                    <div style="display: flex; width: 75%; font-weight: bold;">${styleinfo}</div>
                </div>
                <div style="display: flex;">
                    <div style="display: flex; width: 50%;">Size</div>
                    <div style="display: flex; width: 50%; font-weight: bold;">${storeReferenceInfo}</div>
                </div>
                <div style="display: flex;">
                    <div style="display: flex; width: 50%;">${anchorValue}</div>
                    <div style="display: flex; width: 50%; font-weight: bold;">${anchorValueInfo}</div>
                </div>
                <div style="display: flex;">
                    <div style="display: flex; width: 50%;">${outseamLength}</div>
                    <div style="display: flex; width: 50%; font-weight: bold;">${outseamLengthoInfo}</div>
                </div>
                <div style="display: flex;">
                    <div style="display: flex; width: 50%;">Product</div>
                    <div style="display: flex; width: 50%; font-weight: bold;">${productType}</div>
                </div>
                <div style="display: flex;">
                    <div style="display: flex; width: 50%;">Net Quantity</div>
                    <div style="display: flex; width: 50%; font-weight: bold;">${netQuantityInfo}</div>
                </div>
            </div>
            <div style="margin-top: 8px;display: flex; flex-direction: column;">
                <span>Maximum Retail Price</span>
                <span style="font-weight: bold; font-size: 30px;">${price}</span>
                <span>Inclusive of all Taxes</span>
                <span style="font-size: 16px; margin-top:16px; font-weight:bold;";>Manufactured & Packed By:</span>
                <span style="font-size: 16px;">${customerCareAddress}</span>       

            </div>
            `


const productDetails = document.getElementById('productDetails')
productDetails.innerHTML = template



function printBarcode(){
    const barcodeRef= document.querySelector('.barcodeRef')
    const print_area = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no')
    print_area.document.open()
    // print_area.document.write('<html><head><style></style></head><body style="display: flex; justify-content: center; font-family: formularregular; align-items: center" onload="window.print()">' + barcodeRef.outerHTML + '</html>');
    print_area.document.write(`
    <html>
        <head>
            <style>
                @font-face {
                    font-family: 'formularregular';
                    src: url('./formularregular_w_plex-webfont.woff2') format('woff2'),
                        url('./formularregular_w_plex-webfont.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                    font-feature-settings: "ss09" on;
                }
            </style>
        </head>
        <body style="display: flex; justify-content: center; font-family: 'formularregular', sans-serif; align-items: center" onload="window.print()">
            ${barcodeRef.outerHTML}
        </body>
    </html>
`);
    print_area.document.close();
}