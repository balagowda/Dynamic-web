const express = require('express');
const bodyparser = require('body-parser');
const ejs = require("ejs");
const _ = require('lodash');

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

const homeData =   "blablakjdfmnsdbkfjsdkjfhksdnfkjlshadfkba mdbfjsdbfkjsbdmfbksdfkjdslfbjsdnbfkjdnsankjvn "+
                   "msdvkjsbadv kdsviuhsdfnksjdbfhsdkjfbskjdfmvkjnx mnblkjdbsdfmsakjdhfiushdfkjvn ixcvmn s"+
                   "kjdbvmbndkjv ,mdsjfknsdjkfnskdnfjksndfmnzkjxcvm xkcmvnkjsnsdf,m sdkjfn ,mxcnvmnxlvnlsd"+
                   "nfljnsdlkfnsndfjnsdmnf sdnvlkjsdnvkjsdkjn."

const aboutData =  "blablakjdfmnsdbkfjsdkjfhksdnfkjlshadfkba mdbfjsdbfkjsbdmfbksdfkjdslfbjsdnbfkjdnsankjvn "+
                    "msdvkjsbadv kdsviuhsdfnksjdbfhsdkjfbskjdfmvkjnx mnblkjdbsdfmsakjdhfiushdfkjvn ixcvmn s"+
                    "kjdbvmbndkjv ,mdsjfknsdjkfnskdnfjksndfmnzkjxcvm xkcmvnkjsnsdf,m sdkjfn ,mxcnvmnxlvnlsd"+
                    "nfljnsdlkfnsndfjnsdmnf sdnvlkjsdnvkjsdkjn."

const moreData =   "blablakjdfmnsdbkfjsdkjfhksdnfkjlshadfkba mdbfjsdbfkjsbdmfbksdfkjdslfbjsdnbfkjdnsankjvn "+
                    "msdvkjsbadv kdsviuhsdfnksjdbfhsdkjfbskjdfmvkjnx mnblkjdbsdfmsakjdhfiushdfkjvn ixcvmn s"+
                    "kjdbvmbndkjv ,mdsjfknsdjkfnskdnfjksndfmnzkjxcvm xkcmvnkjsnsdf,m sdkjfn ,mxcnvmnxlvnlsd"+
                    "nfljnsdlkfnsndfjnsdmnf sdnvlkjsdnvkjsdkjn."

const contactData = "blablakjdfmnsdbkfjsdkjfhksdnfkjlshadfkba mdbfjsdbfkjsbdmfbksdfkjdslfbjsdnbfkjdnsankjvn "+
                    "msdvkjsbadv kdsviuhsdfnksjdbfhsdkjfbskjdfmvkjnx mnblkjdbsdfmsakjdhfiushdfkjvn ixcvmn s"+
                    "kjdbvmbndkjv ,mdsjfknsdjkfnskdnfjksndfmnzkjxcvm xkcmvnkjsnsdf,m sdkjfn ,mxcnvmnxlvnlsd"+
                    "nfljnsdlkfnsndfjnsdmnf sdnvlkjsdnvkjsdkjn."

const title = ["Home","About","Contact","More"];
const details = [homeData,aboutData,moreData,contactData];

app.get('/',(req,res)=>{
    res.render('index',{Title:title,Details:details});
})

app.get('/home',(req,res)=>{
    res.render('home',{homePageData:homeData});
})

app.get('/about',(req,res)=>{
    res.render('about',{aboutPageData:aboutData});
})

app.get('/contact',(req,res)=>{
    res.render('contact',{contactPageData:contactData});
})

app.get('/more',(req,res)=>{
    res.render('more',{morePageData:moreData});
})

app.get('/compose',(req,res)=>{
    res.render('compose',{});
})

app.post('/newPost',(req,res)=>{
    let text = req.body.text;
    let longText = req.body.longText;
    title.push(text);
    details.push(longText);
    res.redirect('/');
})

app.get('/:name',(req,res)=>{
    const inputTitle = _.lowerCase(req.params.name);
    title.forEach((item,ind)=>{
        if(_.lowerCase(item) == inputTitle){
            res.render('post',({newHeader:item,newParagraph:details[ind]}));
        }
    })
    
})

app.listen(3000,()=>{
    console.log('server as started');
})