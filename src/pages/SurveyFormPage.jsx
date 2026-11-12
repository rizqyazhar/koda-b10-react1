import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Layout from "../layout/Layout";
import Form from "../components/Form";

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
    formState: { errors },
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
    <Layout>
      <Form
        onSubmit={handleSubmit(pushData)}
        title='Survey Rokok Favorit'
        description='Terima kasih atas ketersediaan anda untuk mengisi survey'
        email='johndoe@gmail.com'>
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
                <input
                  type='radio'
                  {...register("smoking")}
                  id='ya'
                  value='ya'
                />
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
      </Form>
    </Layout>
  );
}
