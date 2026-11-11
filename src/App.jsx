export default function App() {
  return (
    <form>
      <div>
        <div>
          <h1>Survey Rokok Favorit</h1>
          <p>Terima kasih atas ketersediaan anda untuk mengisi survey</p>
        </div>
        <div>
          <span>johndoe@gmail.com</span>
          <button>Switch Account</button>
          <button>
            <svg
              class='size-4 md:size-6 text-slate-700'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-cloud-check preview-icon'>
              <path d='m17 15-5.5 5.5L9 18' />
              <path d='M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327' />
            </svg>
          </button>
        </div>
        <span>* Harus diisi!</span>
      </div>
      <div>
        <label forHtml='nama'>
          Siapa nama anda?<span>*</span>
        </label>
        <input type='text' name='nama' id='nama' placeholder='Jawaban Anda' />
      </div>
      <div>
        <div>
          <label forHtml='umur'>
            Berapa umur anda?<span>*</span>
          </label>
          <input type='text' name='umur' id='umur' placeholder='Jawaban Anda' />
        </div>
      </div>
      <div>
        <div>
          <p>
            Apa jenis kelamin anda?<span>*</span>
          </p>
          <div>
            <div>
              <input type='radio' name='gender' id='male' value='laki-laki' />
              <label forHtml='male'>Laki-laki</label>
            </div>
            <div>
              <input type='radio' name='gender' id='female' value='perempuan' />
              <label forHtml='female'>Perempuan</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>
            Apakah anda perokok?<span>*</span>
          </p>
          <div>
            <div>
              <input type='radio' name='smoking' id='ya' value='ya' />
              <label forHtml='ya'>Ya</label>
            </div>
            <div>
              <input type='radio' name='smoking' id='tidak' value='tidak' />
              <label forHtml='tidak'>Tidak</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>Jika anda perokok, rokok apa yang anda pernah coba?</p>
          <div>
            <div>
              <input type='checkbox' name='cigarettes' id='ggm' value='ggm' />
              <label forHtml='ggm'>Gudang Garam Filter</label>
            </div>
            <div>
              <input type='checkbox' name='cigarettes' id='ls' value='ls' />
              <label forHtml='ls'>Lucky Strike</label>
            </div>
            <div>
              <input type='checkbox' name='cigarettes' id='mb' value='mb' />
              <label forHtml='mb'>Marlboro</label>
            </div>
            <div>
              <input type='checkbox' name='cigarettes' id='es' value='es' />
              <label forHtml='es'>Esse</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </div>
    </form>
  );
}
