import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Layout from "../layout/Layout";
import Form from "../components/Form";
import InputNormal from "../components/InputNormal";
import InputChoice from "../components/InputChoice";
import Button from "../components/Button";

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
    reset,
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

  const getData = JSON.parse(window.localStorage.getItem("survey")) || [];

  const pushData = (data) => {
    getData.push(data);

    window.localStorage.setItem("survey", JSON.stringify(getData));
    reset();
    return;
  };

  return (
    <Layout>
      <Form
        onSubmit={handleSubmit(pushData)}
        title='Survey Rokok Favorit'
        description='Terima kasih atas ketersediaan anda untuk mengisi survey'
        email='johndoe@gmail.com'>
        <InputNormal
          errorsMessage={errors.nama?.message}
          isRequired={true}
          forInput='nama'
          type='text'
          {...register("nama")}
          id='nama'
          placeholder='Jawaban Anda'>
          Siapa nama anda?
        </InputNormal>
        <InputNormal
          errorsMessage={errors.umur?.message}
          isRequired={true}
          forInput='umur'
          type='number'
          {...register("umur")}
          id='umur'
          placeholder='Jawaban Anda'>
          Berapa umur anda?
        </InputNormal>

        <div className='bg-white shadow-sm rounded-lg'>
          <div className='flex flex-col gap-4 px-4 md:px-8 py-2 md:py-4'>
            <p className='font-medium text-sm md:text-base'>
              Apa jenis kelamin anda?
              <span className='text-red-500'>*</span>
            </p>
            <div className='flex gap-8 items-center'>
              <InputChoice
                label='Laki-laki'
                forInput='male'
                type='radio'
                {...register("gender")}
                id='male'
                value='laki-laki'
              />
              <InputChoice
                label='Perempuan'
                forInput='female'
                type='radio'
                {...register("gender")}
                id='female'
                value='perempuan'
              />
            </div>
            <p className='text-red-500 text-xs'>{errors.gender?.message}</p>
          </div>
        </div>

        <div className='bg-white shadow-sm rounded-lg'>
          <div className='flex flex-col gap-4 px-4 md:px-8 py-2 md:py-4'>
            <p className='font-medium text-sm md:text-base'>
              Apakah anda perokok?<span className='text-red-500'>*</span>
            </p>
            <InputChoice
              label='Ya'
              forInput='ya'
              type='radio'
              {...register("smoking")}
              id='ya'
              value='ya'
            />
            <InputChoice
              label='Tidak'
              forInput='tidak'
              type='radio'
              {...register("smoking")}
              id='tidak'
              value='tidak'
            />
            <p className='text-red-500 text-xs'>{errors.smoking?.message}</p>
          </div>
        </div>

        <div className='bg-white shadow-sm rounded-lg'>
          <div className='flex flex-col gap-4 px-4 md:px-8 py-2 md:py-4'>
            <p className='font-medium text-sm md:text-base'>
              Jika anda perokok, rokok apa yang anda pernah coba?
            </p>
            <div className='flex flex-col gap-2'>
              <InputChoice
                label='Gudang Garam Filter'
                forInput='ggm'
                type='checkbox'
                {...register("cigarettes")}
                id='ggm'
                value='ggm'
              />
              <InputChoice
                label='Lucky Strike'
                forInput='ls'
                type='checkbox'
                {...register("cigarettes")}
                id='ls'
                value='ls'
              />
              <InputChoice
                label='Marlboro'
                forInput='mb'
                type='checkbox'
                {...register("cigarettes")}
                id='mb'
                value='mb'
              />
              <InputChoice
                label='Esse'
                forInput='es'
                type='checkbox'
                {...register("cigarettes")}
                id='es'
                value='es'
              />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between items-center'>
          <Button type='submit' variant='primary'>
            Submit
          </Button>
          <Button type='reset'>Reset</Button>
        </div>
      </Form>
    </Layout>
  );
}
