import tw from "twin.macro";

const Steps = ({ steps = ["1", "2", "3"], currentStep }) => {
  return (
    <div tw="grid grid-flow-row md:(grid-flow-col auto-cols-fr) md:justify-between border border-gray-200">
      {steps.map((step, i) => (
        <div
          tw="grid grid-flow-col auto-cols-min items-center md:justify-center gap-4 border-b md:(border-r border-b-0) border-gray-200 p-4 last:border-0"
          key={i}
        >
          <div
            css={[
              tw`h-8 w-8 font-medium rounded-full flex items-center justify-center border border-gray-200 text-gray-500`,
              currentStep > i && tw`bg-blue-700 text-white`,
            ]}
          >
            {i + 1}
          </div>
          <span
            css={[
              tw`text-gray-500 whitespace-nowrap`,
              currentStep > i && tw`text-blue-700`,
            ]}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Steps;
