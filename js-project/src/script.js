const container = document.getElementById('container')

const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const { products } = await res.json()
    console.log(products)

    products.forEach((item) => {
        container.innerHTML += `
        <div id="card" class=" relative p-2   rounded-xl  bg-zinc-700 mt-6 w-[32%] flex-wrap">
            <img class="  rounded-xl  mb-4  "
                src="${item.thumbnail}"
                alt="${item.title}">

            <h1 id="cetagory" class="absolute top-5 left-5">${item.category}</h1>
            <P id="price">$${item.price}</P>
            <p id="title">${item.title}</p>
        </div>
        `
    })
}

getProducts();