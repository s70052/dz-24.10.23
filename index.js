// Покажите товары по следующему массиву

let arr = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,

        "count": 120
    }
}, {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
}, {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
}, {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.1,
        "count": 430
    }
}, {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
}, {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
}, {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3,
        "count": 400
    }
}, {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 1.9,
        "count": 100
    }
}, {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
        "rate": 3.3,
        "count": 203
    }
}, {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 470
    }
}, {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
        "rate": 4.8,
        "count": 319
    }
}, {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
        "rate": 4.8,
        "count": 400
    }
}, {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 250
    }
}, {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.2,
        "count": 140
    }
}, {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
        "rate": 2.6,
        "count": 235
    }
}, {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 340
    }
}, {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
        "rate": 3.8,
        "count": 679
    }
}, {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
}, {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.5,
        "count": 146
    }
}, {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
        "rate": 3.6,
        "count": 145
    }
}]

for (let i = 0; i < arr.length; i++) {

    //a

    let wrap = document.querySelector('.wrap')
    let box = document.createElement('div')
    let ml_box = document.createElement('div')
    let img = document.createElement('img')

    let black_box = document.createElement('div')
    let black_box_h1 = document.createElement('h1')
    let black_box_p = document.createElement('p')

    let flex = document.createElement('div')
    let fle_box = document.createElement('div')
    let img2 = document.createElement('img')
    let fle_box_h2 = document.createElement('h2')

    let fle_box2 = document.createElement('div')
    let img3 = document.createElement('img')
    let fle_box_h22 = document.createElement('h2')

    let fle_box3 = document.createElement('div')
    let img4 = document.createElement('img')
    let fle_box_h23 = document.createElement('h2')

    let btns = document.createElement('div')

    let btn = document.createElement('button')
    //b

    box.classList.add('box')
    ml_box.classList.add('ml_box')
    img.classList.add('img')
    black_box.classList.add('black_box')
    black_box_h1.classList.add('h1')
    black_box_p.classList.add('p')
    flex.classList.add('flex')
    fle_box.classList.add('fle_box')
    img2.classList.add('img')
    fle_box_h2.classList.add('h2')

    fle_box2.classList.add('fle_box')
    img3.classList.add('img')
    fle_box_h22.classList.add('h2')

    fle_box3.classList.add('fle_box')
    img4.classList.add('img')
    fle_box_h23.classList.add('h2')

    btns.classList.add('btns')
    btn.classList.add('btn')

    fle_box_h2.innerHTML = arr[i].price
    fle_box_h22.innerHTML = arr[i].rating.rate
    fle_box_h23.innerHTML = arr[i].rating.count
    black_box_h1.innerHTML = arr[i].category
    black_box_p.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in  the padded sleeve your everyday'

    btn.innerHTML = 'В избранное'
    img.src = arr[i].image


    img2.src = './Group 7 (2).png'
    img3.src = './Group 10.svg'
    img4.src = './Group 9.png'


    wrap.append(box)
    box.append(ml_box, black_box)
    ml_box.append(img)
    black_box.append(black_box_h1, black_box_p, flex, btns)
    flex.append(fle_box, fle_box2, fle_box3)
    fle_box.append(img2, fle_box_h2)
    fle_box2.append(img3, fle_box_h22)
    fle_box3.append(img4, fle_box_h23)
    btns.append(btn)





    let one = document.querySelector('#one')
    let h = document.querySelector('.h')
    one.onclick = () => {
        h.innerHTML = 'В корзине : 5 товар'
        let boxes = document.querySelectorAll('.box')

        boxes.forEach((box, idx) => {

            if (idx < 5) {
                box.style.transition = 'opacity 0.8s'
                box.style.opacity = 1


            } else {
                box.style.transition = 'opacity 0.8s'
                box.style.opacity = 0

            }
        })
    }
    let two = document.querySelector('#two')
    two.onclick = () => {
        h.innerHTML = 'В корзине : 7 товар'
        let boxes = document.querySelectorAll('.box')
        boxes.forEach(box => {
            box.style.transition = 'opacity 0.8s'
            box.style.opacity = 1
        })
    }



    let dia = document.querySelector('.dialog')
    let bt = document.querySelector('#three')

    bt.onclick = () => {
        dia.showModal()
        dia.classList.add("dia")
    }

    let mix = document.querySelector('.mix')
    let dialog = document.createElement("dialog")
    let h1 = document.createElement('h1')
    let bix = document.createElement('div')
    let tire = document.createElement('div')
    let boxx = document.createElement('div')
    let img_box = document.createElement('div')
    let ims = document.createElement('img')
    let h3 = document.createElement('h3')
    let bte = document.createElement('button')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let as = document.createElement('p')
    let tiree = document.createElement('div')
    let pp = document.createElement('p')

    pp.innerHTML = 'X'
    dialog.classList.add('dialog')
    h1.innerHTML = 'Корзина'
    ims.src = './81fPKd-2AYL 1.png'
    bix.classList.add('bix')
    tire.classList.add('tire')
    boxx.classList.add('boxx')
    img_box.classList.add('img_box')
    ims.classList.add('ims')
    h3.classList.add('h3')
    h3.innerHTML = 'MEN’S CLOTHING '
    bte.classList.add('bte')
    p1.classList.add('bte_p')
    p1.innerHTML = '-'
    p2.classList.add('bte_p')
    p2.innerHTML = '1'
    p3.innerHTML = '+'
    p3.classList.add('bte_p')
    as.classList.add('as')
    as.innerHTML = '0 сум'
    tiree.classList.add('tiree')
    pp.classList.add('pp')
    mix.append(dialog)
    dialog.append(h1, pp, bix)
    bix.append(tire, boxx, pp, tiree)
    boxx.append(img_box, h3, bte, as)
    img_box.append(ims)
    bte.append(p1, p2, p3)


    pp.onclick=()=>{
        dialog.close()
    }
}







