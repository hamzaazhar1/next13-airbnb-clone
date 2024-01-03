'use client';

import Select from 'react-select'

import useCountries from '@/app/hooks/useCountries';

export type CityselectValue={
  value:string,
  name:string,
  label:string,
  latlng:number[],
  region:string,
}

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[],
  region: string;
  value: string
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}
interface CitySelectProps {
  value?: CityselectValue;
  onChange: (value: CityselectValue) => void;
}

const CountrySelect: React.FC<CitySelectProps> = ({
  value,
  onChange
}) => {
  const { getAll } = useCountries();

  return ( 
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CityselectValue)}
        formatOptionLabel={(option: any) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label}
              {/* , */}
              {/* <span className="text-neutral-500 ml-1">
                {option.region}
              </span> */}
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
   );
}
 
export default CountrySelect;