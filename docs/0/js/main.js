window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    var asciidoctor = Asciidoctor()
    //var html = asciidoctor.convert('= あいう\n\n== あああ\n\nHello, _Asciidoctor_')
    var html = asciidoctor.convert('*This* is Asciidoctor.<br>aaaa', { standalone: true })
    console.log(html)
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
    document.getElementById('content').innerHTML = html

});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

