import { Box, Chip } from "@mui/joy";
import { FlagIcon } from "../flag/objFlagIcon";

type ValueFilterProps = {
  selected: Array<{ label: string; value: string }>;
};

export const ValueFilter = ({ selected }: ValueFilterProps) => {
  return (
    <Box sx={{ display: "flex", gap: "0.25rem" }}>
      {selected?.map((selectedOption) => {
        const IconComponent =
          FlagIcon[String(selectedOption.label).toLocaleLowerCase()];
        return (
          <Chip variant="soft" color="primary">
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {IconComponent && <IconComponent />}
              {selectedOption.label}
            </div>
          </Chip>
        );
      })}
    </Box>
  );
};
