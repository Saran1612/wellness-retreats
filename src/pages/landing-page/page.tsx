import React, { useEffect, useState } from 'react';
import Banner from '../../components/banner';
import Retreats from '../../components/retreats';
import Dropdown from '../../components/dropdown';
import Searches from '../../components/search';
import { Box, Grid } from '@mui/material';
import { api } from '../../network/api';
import { Dayjs } from 'dayjs';
import Pagination from '../../components/pagination';

const ITEMS_PER_PAGE = 5;

const LandingPage = (): JSX.Element => {
    const [allData, setAllData] = useState<any>([]);
    const [filteredData, setFilteredData] = useState<any>([]);
    const [displayData, setDisplayData] = useState<any>([]);
    const [typeOption, setTypeOption] = useState<any>([]);
    const [locOption, setLocOption] = useState<any>([]);
    const [type, setType] = useState<string>("");
    const [loc, setLoc] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>('');
    const [Date, setDate] = useState<Dayjs | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        filterData();
    }, [type, loc, searchValue, Date]);

    useEffect(() => {
        updateDisplayedData();
    }, [filteredData, currentPage]);

    const getData = () => {
        try {
            api.getAllData().then(({ response }) => {
                const data: any = response;
                setAllData(data); // Assuming 'items' contains the array of data
                setFilteredData(data);
                setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));

                const formateType: any = data.map((item: any) => item.type);
                const uniqueTypes = Array.from(new Set(formateType));
                const formattedOptions = uniqueTypes.map(type => ({
                    value: type,
                    label: type
                }));
                setTypeOption(formattedOptions);

                const formateLoc: any = data.map((item: any) => item.location);
                const uniqueLoc = Array.from(new Set(formateLoc));
                const formattedLocOptions = uniqueLoc.map(loc => ({
                    value: loc,
                    label: loc
                }));
                setLocOption(formattedLocOptions);
            });
        } catch (err) {
            console.error(err);
        }
    };

    const filterData = () => {
        let filtered = allData;

        if (type) {
            filtered = filtered.filter((item: any) => item.type === type);
        }

        if (loc) {
            filtered = filtered.filter((item: any) => item.location === loc);
        }

        if (searchValue) {
            filtered = filtered.filter((item: any) => {
                return Object.values(item).some((val: any) =>
                    String(val).toLowerCase().includes(searchValue.toLowerCase())
                );
            });
        }

        if (Date) {
            const selectedDate = Date.format('YYYY-MM-DD');
            filtered = filtered.filter((item: any) => item.date === selectedDate);
        }

        setFilteredData(filtered);
        setCurrentPage(1);
        setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    };

    const updateDisplayedData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setDisplayData(filteredData.slice(startIndex, endIndex));
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleTypeChanges = (option: any) => {
        setType(option.value);
    };

    const handleLocChanges = (option: any) => {
        setLoc(option.value);
    };

    return (
        <div className='m-[1.2rem]'>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Banner />
            </Box>

            <div className='flex mt-[2rem]'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Dropdown
                            title="Filter by Type"
                            placeholder="Filter by Type"
                            options={typeOption}
                            handleTypeChange={handleTypeChanges}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Dropdown
                            title="Filter by Location"
                            placeholder="Filter by Location"
                            options={locOption}
                            handleTypeChange={handleLocChanges}
                        />
                    </Grid>
                    <Grid item xs={12} sm={1} md={2} sx={{ display: { xs: "none", sm: "none", md: "block" } }}></Grid>

                    <Grid item xs={12} sm={4} className='flex justify-end items-center w-full'>
                        <Searches
                            placeholder='Search for retreats...'
                            onChange={handleSearchChange}
                            value={searchValue}
                        />
                    </Grid>
                </Grid>
            </div>

            <div className='mt-[2rem]'>
                <Retreats displayData={displayData} />
            </div>

            <div className='flex justify-center w-full items-center mt-[1.6rem] mb-[3rem]'>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default LandingPage;
