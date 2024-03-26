import { useEffect, useState } from 'react';

import axios from 'axios';
import { categories, types } from './jsondata';
import CompetitionsList from './CompetitionsList';
import Echo from '../../themes/Echo';
import AlertComponent from '@/base-components/Alert';
import Lucide from '@/base-components/Lucide';
import { Dialog } from '../../base-components/Headless';
import Button from '../../base-components/Button';
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormSwitch,
} from '@/base-components/Form';
// import Litepicker from '@/base-components/Litepicker';
// import { ClassicEditor } from '@/base-components/Ckeditor';

export default function Competition() {
  const [competitionList, setCompetitionList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showformError, setShowformError] = useState(false);
  let [categoryId, setCategoryId] = useState('');
  let [title, setTitle] = useState('');
  let [startDate, setStartDate] = useState(new Date());
  let [totalTickets, setTotalTickets] = useState('');
  let [validityDays, setValidityDays] = useState('');
  let [secondaryCompetition, setSecondaryCompetition] = useState('');
  let [ticketPrice, setTicketPrice] = useState('');
  let [description, setDescription] = useState('');
  let [type, setType] = useState('');
  let [buyoutEnabled, setBuyoutEnabled] = useState(false);
  let [buyoutWorth, setBuyoutWorth] = useState('');
  let [idToUpdate, setidToUpdate] = useState('');
  let [files, setFiles] = useState([]);
  let [thumbnail, setThumbnail] = useState([]);
  const [modal, setmodal] = useState(false);

  const handleResetForm = () => {
    setCategoryId('');
    setTitle('');
    setStartDate(new Date());
    setTotalTickets('');
    setValidityDays('');
    setSecondaryCompetition('');
    setTicketPrice('');
    setDescription('');
    setType('');
    setBuyoutEnabled(false);
    setBuyoutWorth('');
    setidToUpdate('');
  };

  const handleList = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(
        `${process.env.API_BASE_URL}/compititionroom/list`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token && token}`,
          },
        }
      );

      setCompetitionList(response.data.data.results);
      setShowError(false);
    } catch (error: any) {
      console.log(error);

      setShowError(error.message);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (
      !categoryId ||
      !title ||
      !startDate ||
      !totalTickets ||
      !validityDays ||
      !description ||
      !type
    ) {
      setShowformError('Please fill in all required fields.');
      return;
    }
    try {
      const formData = {
        categoryId: categoryId,
        title: title,
        startDate: startDate,
        totalTickets: totalTickets,
        validityDays: validityDays,
        ticketPrice: ticketPrice,
        description: description,
        type: type,
        buyoutEnabled: buyoutEnabled,
        buyoutWorth: buyoutWorth,
        secondaryCompetition: secondaryCompetition,
        media: {},
      };

      files.forEach((file, index) => {
        formData.media[`media${index + 1}`] = file.name;
      });

      if (idToUpdate) {
        formData.id = idToUpdate;
        await axios.post(
          `${process.env.API_BASE_URL}/compititionroom/update`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token && token}`,
            },
          }
        );
      } else {
        await axios.post(
          `${process.env.API_BASE_URL}/compititionroom/create`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token && token}`,
            },
          }
        );
      }

      setShowformError(false);
      handleList();
      setmodal(false);
      handleResetForm();
    } catch (error: any) {
      setShowformError(error.message);
    }
  };

  const handleUpdate = async (idToUpdate: any) => {
    setmodal(true);

    const competitionToUpdate: any = competitionList.find(
      (obj) => obj.id === idToUpdate
    );
    console.log('competitionToUpdate', competitionToUpdate);
    setCategoryId(competitionToUpdate.category_id);
    setTitle(competitionToUpdate.title);
    setStartDate(competitionToUpdate.start_date);
    setTotalTickets(competitionToUpdate.total_tickets);
    setValidityDays(competitionToUpdate.validity_days);
    setSecondaryCompetition(competitionToUpdate.secondry_competition);
    setTicketPrice(competitionToUpdate.ticket_price);
    setDescription(competitionToUpdate.description);
    setType(competitionToUpdate.type);
    setBuyoutEnabled(competitionToUpdate.buyout_enabled);
    setBuyoutWorth(competitionToUpdate.buyout_worth);
    setidToUpdate(idToUpdate);
  };

  const handleDelete = async (idtoDelete: any, title: any) => {
    const token = localStorage.getItem('token');

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${title}?`
    );

    if (confirmDelete) {
      try {
        await axios.post(
          `${process.env.API_BASE_URL}/compititionroom/delete`,
          { id: idtoDelete },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token && token}`,
            },
          }
        );

        setShowError(false);
        handleList();
      } catch (error) {
        setShowError(true);
      }
    }
  };

  useEffect(() => {
    handleList();
    if (modal == false) {
      handleResetForm();
    }
  }, []);

  return (
    <>
      <Echo>
        {showError && (
          <AlertComponent variant='pending' className='flex items-center mb-4'>
            <Lucide icon='AlertOctagon' className='w-6 h-6 mr-2' /> {showError}
          </AlertComponent>
        )}

        <Dialog
          size='xl'
          staticBackdrop
          open={modal}
          onClose={() => {
            setmodal(false);
          }}
        >
          <Dialog.Panel className='w-screen  my-4'>
            <Dialog.Title>
              <h3 className='text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                {idToUpdate ? 'Update' : 'Add'} Competition{' '}
              </h3>

              <button
                onClick={() => setmodal(false)}
                className='absolute top-0 right-0 mt-3 mr-3'
              >
                <Lucide icon='X' className='w-8 h-8 text-slate-400' />
              </button>
            </Dialog.Title>
            <Dialog.Description>
              {showformError && (
                <AlertComponent
                  variant='pending'
                  className='flex items-center mb-4'
                >
                  <Lucide icon='AlertOctagon' className='w-6 h-6 mr-2' />{' '}
                  {showformError}
                </AlertComponent>
              )}

              <form
                onSubmit={handleSubmit}
                className='mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content'
              >
                <div className='grid grid-cols-12'>
                  <div className='col-span-12 sm:col-span-6 mx-3'>
                    <div className='grid gap-4 mb-4'>
                      <div className='col-span-12 mb-3'>
                        <FormLabel className='mb-2'>Upload Thumbnail</FormLabel>
                        <input
                          className='relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white'
                          id='thumbnail'
                          type='file'
                          onChange={(e) => setThumbnail(e.target.files)}
                        />
                      </div>
                    </div>{' '}
                    <div className='grid gap-4 mb-4'>
                      <div className='col-span-12 mb-3'>
                        <FormLabel className='mb-2'>
                          Upload Multiple Files
                        </FormLabel>
                        <input
                          className='relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white'
                          id='multiple_files'
                          type='file'
                          multiple
                          onChange={(e) => setFiles([...e.target.files])}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-12 sm:col-span-6 mx-3'>
                    <div className='grid gap-4 mb-4 grid-cols-12'>
                      <div className='col-span-12 mb-3'>
                        <FormLabel className='mb-2'>Title</FormLabel>
                        <FormInput
                          type='text'
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                          className='w-full'
                        />
                      </div>{' '}
                      <div className='col-span-12 mb-3'>
                        <FormLabel className='mb-2'>Start Date</FormLabel>

                        <div className='relative mx-auto'>
                          <div className='absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400'>
                            <Lucide icon='Calendar' className='w-4 h-4' />
                          </div>
                          {/* <Litepicker
                            value={startDate}
                            onChange={setStartDate}
                            options={{
                              autoApply: false,
                              showWeekNumbers: true,
                              dropdowns: {
                                minYear: 1990,
                                maxYear: null,
                                months: true,
                                years: true,
                              },
                            }}
                            className='pl-12'
                          /> */}
                        </div>
                      </div>
                      <div className='col-span-12 mb-3'>
                        <FormLabel className='mb-2'>Description</FormLabel>
                        {/* <FormInput
                          type='text'
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                          className='w-full'
                        />  */}
                        {/* <ClassicEditor
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        /> */}
                      </div>
                      <div className='col-span-6 mb-3'>
                        <FormLabel className='mb-2'>Category</FormLabel>
                        <FormSelect
                          value={categoryId}
                          // onValueChange={setCategoryId}
                          onChange={(e) => setCategoryId(e.target.value)}
                        >
                          {categories.map((category, index) => (
                            <option value={category.key}>
                              {' '}
                              {category.value}
                            </option>
                          ))}
                        </FormSelect>
                      </div>{' '}
                      <div className='col-span-6 mb-3'>
                        <FormLabel className='mb-2'>Type</FormLabel>

                        <FormSelect
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          {types.map((t: any) => (
                            <option value={t.key}> {t.value}</option>
                          ))}
                        </FormSelect>
                      </div>
                      <div className='col-span-6 mb-3'>
                        <FormLabel className='mb-2'>Total Tickets</FormLabel>
                        <FormInput
                          className='mx-auto max-w-sm'
                          value={totalTickets}
                          onChange={(e) => setTotalTickets(e.target.value)}
                        />
                      </div>
                      <div className='col-span-6 mb-3'>
                        <FormLabel className='mb-2'>Ticket Price</FormLabel>

                        <FormInput
                          className='mx-auto max-w-sm'
                          value={ticketPrice}
                          onChange={(e) => setTicketPrice(e.target.value)}
                        />
                      </div>
                      <div className='col-span-12 mb-3'>
                        <FormLabel className='mb-2'>Validity Days</FormLabel>

                        <FormInput
                          className='w-full'
                          value={validityDays}
                          onChange={(e) => setValidityDays(e.target.value)}
                        />
                      </div>
                      <div className='col-span-12 mb-3'>
                        <FormLabel className='mb-2'>
                          Secondary Competition
                        </FormLabel>
                        <FormInput
                          type='text'
                          value={secondaryCompetition}
                          onChange={(e) =>
                            setSecondaryCompetition(e.target.value)
                          }
                          className='w-full'
                        />
                      </div>
                      <div className='col-span-6 mb-3'>
                        <FormLabel className='mb-2'>Buyout Worth</FormLabel>

                        <FormInput
                          className='w-full'
                          value={buyoutWorth}
                          onChange={(e) => setBuyoutWorth(e.target.value)}
                        />
                      </div>
                      <div className='flex items-end col-span-6 mb-3'>
                        <FormSwitch>
                          <FormSwitch.Input
                            id='checkbox-switch-7'
                            type='checkbox'
                            checked={buyoutEnabled}
                            onChange={(e) => setBuyoutEnabled(e)}
                          />
                          <FormSwitch.Label htmlFor='checkbox-switch-7'>
                            Buyout Enabled
                          </FormSwitch.Label>
                        </FormSwitch>
                      </div>
                    </div>
                  </div>
                </div>

                <Button type='submit' variant='primary' className='w-full'>
                  {idToUpdate ? 'Update' : 'Add'}
                </Button>
              </form>
            </Dialog.Description>
          </Dialog.Panel>
        </Dialog>

        <CompetitionsList
          competitionList={competitionList}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          setmodal={setmodal}
          idToUpdate={idToUpdate}
        />
      </Echo>
    </>
  );
}
