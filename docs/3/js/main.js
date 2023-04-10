window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    let asciidoctor = Asciidoctor()
    function show(ad) {
        console.log(ad)
        const html = asciidoctor.convert(ad,{safe:'UNSAFE'})
        console.log(html)
        document.getElementById('content').innerHTML = html
    }
    //const res = await fetch(`https://localhost/2/ad/index.ad`)
    fetch(`index.ad`)
    .then(res=>res.text())
    .then(ad=>{show(ad)})
    .catch(err=>console.error(err))
    /*
    .then(ad=>{
        console.log(ad)
        const html = asciidoctor.convert(ad)
        console.log(html)
        document.getElementById('content').innerHTML = html
    }).catch(err=>console.error(err))
    */
    fetch(`ad/index.ad`).then(res=>res.text()).then(ad=>{show(ad)}).catch(e=>console.error(e))
    fetch(`2/ad/index.ad`).then(res=>res.text()).then(ad=>{show(ad)}).catch(e=>console.error(e))
    fetch(`doc/2/ad/index.ad`).then(res=>res.text()).then(ad=>{show(ad)}).catch(e=>console.error(e))
    fetch(`./ad/index.ad`).then(res=>res.text()).then(ad=>{show(ad)}).catch(e=>console.error(e))
    fetch(`./2/ad/index.ad`).then(res=>res.text()).then(ad=>{show(ad)}).catch(e=>console.error(e))
    fetch(`./doc/2/ad/index.ad`).then(res=>res.text()).then(ad=>{show(ad)}).catch(e=>console.error(e))
    const res = await fetch(`2/ad/index.ad`)
    console.log(res)
    const ad = await res.text()
    console.log(ad)
    let html = asciidoctor.convert(ad)
    document.getElementById('content').innerHTML = html
    /*
    try { var doc = asciidoctor.loadFile('ad/index.ad');  console.log(doc); }
    catch(e) { console.error(e) }
    try { var doc = asciidoctor.convertFile('ad/index.ad');  console.log(doc); }
    catch(e) { console.error(e) }
    try { var doc = asciidoctor.loadFile('ad/index.ad', { to_file: false });  console.log(doc); }
    catch(e) { console.error(e) }
    try { var doc = asciidoctor.convertFile('ad/index.ad', { to_file: false });  console.log(doc); }
    catch(e) { console.error(e) }
    try { var doc = asciidoctor.loadFile('ad/index.ad', { to_file: false, safe:'UNSAFE' });  console.log(doc); }
    catch(e) { console.error(e) }
    try { var doc = asciidoctor.convertFile('ad/index.ad', { to_file: false, safe:'UNSAFE' });  console.log(doc); }
    catch(e) { console.error(e) }
    try { var doc = asciidoctor.loadFile('ad/index.ad', { to_file: false, standalone: true, safe:'UNSAFE' });  console.log(doc); }
    catch(e) { console.error(e) }
    try { var doc = asciidoctor.convertFile('ad/index.ad', { to_file: false, standalone: true, safe:'UNSAFE' });  console.log(doc); }
    catch(e) { console.error(e) }
    */

    //var doc = asciidoctor.convertFile('ad/index.ad')
    //var html = asciidoctor.convert('= あいう\n\n== あああ\n\nHello, _Asciidoctor_')
//    var html = asciidoctor.convert('*This* is Asciidoctor.<br>aaaa', { standalone: true })
//    console.log(html)
    /*
    var doc = asciidoctor.convertFile('/path/to/file.adoc')
    console.log(doc)
    var html = asciidoctor.convertFile('/path/to/file.adoc', { to_file: false, standalone: true })
    console.log(html)
    var doc = asciidoctor.loadFile('file.adoc')
    console.log(doc.getDocumentTitle())
    console.log(doc.getAttributes())
    doc.convert()
    var doc = asciidoctor.load('Hello, _Asciidoctor_')
    */
    //const ad = `= 見出し\n\n文章。`
    //const html = asciidoctor.convert(ad)
    //console.log(html)
    //document.getElementById('content').innerHTML = html

});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

