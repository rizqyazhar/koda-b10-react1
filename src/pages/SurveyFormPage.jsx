import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  nama: yup.string().required("Nama harus diisi"),
  umur: yup
    .number()
    .min(20, "Minimal umur 20 tahun")
    .max(80, "Maksimal umur 80 tahun")
    .required("Umur harus diisi"),
  gender: yup.string().required("Mohon isi salah satu"),
  smoking: yup.string().required("Mohon isi salah satu"),
  cigarettes: yup.array(),
});

export default function SurveyFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      nama: "",
      umur: "",
      gender: "",
      smoking: "",
      cigarettes: [],
    },
    resolver: yupResolver(schema),
  });

  const pushData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(pushData)}>
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
        <input
          type='text'
          {...register("nama")}
          id='nama'
          placeholder='Jawaban Anda'
        />
        <p>{errors.nama?.message}</p>
      </div>
      <div>
        <div>
          <label forHtml='umur'>
            Berapa umur anda?<span>*</span>
          </label>
          <input
            type='number'
            {...register("umur")}
            id='umur'
            placeholder='Jawaban Anda'
          />
          <p>{errors.umur?.message}</p>
        </div>
      </div>
      <div>
        <div>
          <p>
            Apa jenis kelamin anda?<span>*</span>
          </p>
          <div>
            <div>
              <input
                type='radio'
                {...register("gender")}
                id='male'
                value='laki-laki'
              />
              <label forHtml='male'>Laki-laki</label>
            </div>
            <div>
              <input
                type='radio'
                {...register("gender")}
                id='female'
                value='perempuan'
              />
              <label forHtml='female'>Perempuan</label>
            </div>
            <p>{errors.gender?.message}</p>
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
              <input type='radio' {...register("smoking")} id='ya' value='ya' />
              <label forHtml='ya'>Ya</label>
            </div>
            <div>
              <input
                type='radio'
                {...register("smoking")}
                id='tidak'
                value='tidak'
              />
              <label forHtml='tidak'>Tidak</label>
            </div>
            <p>{errors.smoking?.message}</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>Jika anda perokok, rokok apa yang anda pernah coba?</p>
          <div>
            <div>
              <input
                type='checkbox'
                {...register("cigarettes")}
                id='ggm'
                value='ggm'
              />
              <label forHtml='ggm'>Gudang Garam Filter</label>
            </div>
            <div>
              <input
                type='checkbox'
                {...register("cigarettes")}
                id='ls'
                value='ls'
              />
              <label forHtml='ls'>Lucky Strike</label>
            </div>
            <div>
              <input
                type='checkbox'
                {...register("cigarettes")}
                id='mb'
                value='mb'
              />
              <label forHtml='mb'>Marlboro</label>
            </div>
            <div>
              <input
                type='checkbox'
                {...register("cigarettes")}
                id='es'
                value='es'
              />
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
