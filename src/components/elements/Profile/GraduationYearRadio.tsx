import { useGraduationYears } from "@/hooks/useGraduationYears";
import { RadioGroup } from "@headlessui/react";
import { Control, Controller, FieldValues } from "react-hook-form";

type GraduationYearRadioProps = {
  control: Control<FieldValues, any>;
  defaultChipColor?: string;
};

export const GraduationYearRadio = ({
  control,
  defaultChipColor = "bg-white",
}: GraduationYearRadioProps): JSX.Element => {
  const { graduationYears } = useGraduationYears();

  const years = [...graduationYears]
    .filter((year) => year.year !== "other")
    .sort((a, b) => (a.year as number) - (b.year as number))
    .map((year) => `${year.year}年度`);
  years.push("その他");

  return (
    <div className="flex flex-col gap-6">
      <label htmlFor="radio">卒業予定年度</label>
      <Controller
        name="graduateYear"
        control={control}
        render={({ field }) => (
          <RadioGroup
            onChange={(graduateYear) => {
              field.onChange(graduateYear);
            }}
          >
            <div id="radio" className="flex flex-wrap gap-8">
              {years.length > 1 &&
                years.map((graduateYear: string) => (
                  <RadioGroup.Option key={graduateYear} value={graduateYear}>
                    {({ checked }) => {
                      return (
                        <span
                          className={`${
                            checked ? "bg-gray-400" : defaultChipColor
                          } px-8 py-2 rounded-3xl`}
                        >
                          {graduateYear}
                        </span>
                      );
                    }}
                  </RadioGroup.Option>
                ))}
            </div>
          </RadioGroup>
        )}
      />
    </div>
  );
};
