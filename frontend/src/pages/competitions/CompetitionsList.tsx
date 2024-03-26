import Lucide from '../../base-components/Lucide';
import { Menu, Popover } from '../../base-components/Headless';
import Pagination from '../../base-components/Pagination';
import { FormInput, FormSelect } from '../../base-components/Form';
import Tippy from '../../base-components/Tippy';
import products from '../../fakers/products';
import reviews from '../../fakers/reviews';
import Button from '../../base-components/Button';
import _ from 'lodash';
import Progress from '@/base-components/Progress';

export default function CompetitionsList({
  competitionList,
  handleDelete,
  handleUpdate,
  setmodal,
  idToUpdate,
}) {
  return (
    <div className='grid grid-cols-12 gap-y-10 gap-x-6'>
      <div className='col-span-12'>
        <div className='flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row'>
          <div className='text-base font-medium group-[.mode--light]:text-white'>
            Competitions
          </div>
          <div className='flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto'>
            <Button
              variant='primary'
              className='group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent'
              onClick={() => {
                setmodal(true);
              }}
            >
              <Lucide icon='PenLine' className='stroke-[1.3] w-4 h-4 mr-2' />{' '}
              Add New Competition
            </Button>
          </div>
        </div>
        <div className='mt-3.5'>
          <div className='flex flex-col box box--stacked'>
            <div className='flex flex-col p-5 sm:items-center sm:flex-row gap-y-2'>
              <div>
                <div className='relative'>
                  <Lucide
                    icon='Search'
                    className='absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500'
                  />
                  <FormInput
                    type='text'
                    placeholder='Search competition...'
                    className='pl-9 sm:w-64 rounded-[0.5rem]'
                  />
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto'>
                <Popover className='inline-block'>
                  {({ close }) => (
                    <>
                      <Popover.Button
                        as={Button}
                        variant='outline-secondary'
                        className='w-full sm:w-auto'
                      >
                        <Lucide
                          icon='ArrowDownWideNarrow'
                          className='stroke-[1.3] w-4 h-4 mr-2'
                        />
                        Filter
                        <div className='flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full bg-slate-100'>
                          3
                        </div>
                      </Popover.Button>
                      <Popover.Panel placement='bottom-end'>
                        <div className='p-2'>
                          <div>
                            <div className='text-left text-slate-500'>
                              Status
                            </div>
                            <FormSelect className='flex-1 mt-2'>
                              <option value='Continued'>Continued</option>
                              <option value='Completed'>Completed</option>
                              <option value='Unbegun'>Unbegun</option>
                            </FormSelect>
                          </div>

                          <div className='flex items-center mt-4'>
                            <Button
                              variant='secondary'
                              onClick={() => {
                                close();
                              }}
                              className='w-32 ml-auto'
                            >
                              Close
                            </Button>
                            <Button variant='primary' className='w-32 ml-2'>
                              Apply
                            </Button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </div>
            </div>
            <div className='overflow-hidden'>
              <div className='grid grid-cols-12 px-5 -mx-5 border-dashed border-y'>
                {competitionList.map((item, index) => (
                  <div
                    key={index}
                    className='col-span-12 sm:col-span-6 xl:col-span-6 border-dashed border-slate-300/80 [&:nth-child(4n)]:border-r-0 px-5 py-5 [&:nth-last-child(-n+4)]:border-b-0 border-r border-b flex flex-col'
                  >
                    <div className='overflow-hidden rounded-lg h-52 image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-slate-900/90 before:to-black/20'>
                      <img
                        alt='Tailwise - Admin Dashboard Template'
                        className='rounded-md'
                        src='./images/dollars.jpg'
                      />
                      {item.competition_running_status === 'compelted' ? (
                        <span className='absolute top-0 z-10 px-2.5 py-1 m-5 text-xs text-white rounded-lg bg-success/80 font-medium border-white/20 border'>
                          Compeleted
                        </span>
                      ) : item.competition_running_status === 'continued' ? (
                        <span className='absolute top-0 z-10 px-2.5 py-1 m-5 text-xs text-white rounded-lg bg-warning/80 font-medium border-white/20 border'>
                          Continued
                        </span>
                      ) : (
                        <span className='absolute top-0 z-10 px-2.5 py-1 m-5 text-xs text-white rounded-lg bg-pending/80 font-medium border-white/20 border'>
                          Unbegun
                        </span>
                      )}
                      {item.type === 'a' ? (
                        <span className='absolute top-0 right-0 z-10 px-2.5 py-1 m-5 text-xs text-white rounded-lg bg-primary/80 font-medium border-white/20 border'>
                          A
                        </span>
                      ) : item.type === 'b' ? (
                        <span className='absolute top-0 right-0 z-10 px-2.5 py-1 m-5 text-xs text-white rounded-lg bg-primary/80 font-medium border-white/20 border'>
                          B
                        </span>
                      ) : null}{' '}
                      <div className='absolute bottom-0 z-10 w-full px-5 pb-6 text-white'>
                        <span className='block text-5xl font-medium truncate'>
                          ${item.ticket_price}
                        </span>
                        <span className='block text-lg font-medium truncate'>
                          {item.title}
                        </span>
                        <span className='mt-3 text-xs text-white/80'>
                          {new Date(item.start_date)?.toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </span>
                      </div>
                    </div>
                    <div className='pt-5'>
                      <div className='flex flex-col gap-3.5 mb-5 pb-5 mt-auto border-b border-dashed border-slate-300/70'>
                        <div className='flex items-center'>
                          <div className='text-slate-500'>Buyout Worth:</div>
                          <div className='ml-auto'>
                            <div className='flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px'>
                              <span className='-mt-px'>
                                £{item.buyout_worth}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className='flex items-center'>
                          <div className='text-slate-500'>Validity Days:</div>
                          <div className='ml-auto'>
                            <span className='ml-1 text-xs text-slate-500'>
                              {item.validity_days}
                            </span>
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <div className='text-slate-500'>Tickets:</div>
                          <div className='ml-auto'>
                            <span className='ml-1 text-xs text-slate-500'>
                              <span className='text-sm text-danger font-bold'>
                                {item.tickets_sold}
                              </span>{' '}
                              Sold /{' '}
                              <span className='text-sm text-success font-bold'>
                                {item.total_tickets}
                              </span>{' '}
                              Total
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Progress className='h-4'>
                            <Progress.Bar
                              width={`${
                                (item.tickets_sold / item.total_tickets) * 100
                              }%`}
                              role='progressbar'
                              aria-valuenow={
                                (item.tickets_sold / item.total_tickets) * 100
                              }
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              {`${Math.round(
                                (item.tickets_sold / item.total_tickets) * 100
                              )}%`}
                            </Progress.Bar>
                          </Progress>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <a
                          className='flex items-center mr-auto text-primary'
                          href='#'
                        >
                          <Lucide
                            icon='KanbanSquare'
                            className='w-4 h-4 stroke-[1.3] mr-1.5'
                          />{' '}
                          {/* Preview */}
                        </a>
                        <button
                          className='flex items-center mr-3'
                          onClick={() => handleUpdate(item.id)}
                        >
                          <Lucide
                            icon='CheckSquare'
                            className='w-4 h-4 stroke-[1.3] mr-1.5'
                          />{' '}
                          Edit
                        </button>
                        <button
                          className='flex items-center text-danger'
                          onClick={() => handleDelete(item.id, item.title)}
                        >
                          <Lucide
                            icon='Trash2'
                            className='w-4 h-4 stroke-[1.3] mr-1.5'
                          />{' '}
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className='flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row'>
              <Pagination className='flex-1 w-full mr-auto sm:w-auto'>
                <Pagination.Link>
                  <Lucide icon='ChevronsLeft' className='w-4 h-4' />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon='ChevronLeft' className='w-4 h-4' />
                </Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>1</Pagination.Link>
                <Pagination.Link active>2</Pagination.Link>
                <Pagination.Link>3</Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>
                  <Lucide icon='ChevronRight' className='w-4 h-4' />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon='ChevronsRight' className='w-4 h-4' />
                </Pagination.Link>
              </Pagination>
              <FormSelect className='sm:w-20 rounded-[0.5rem]'>
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </FormSelect>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
