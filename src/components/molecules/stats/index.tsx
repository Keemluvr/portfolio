import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { classNameStats } from "./style";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import { Chip } from "@nextui-org/react";
import useForFunList from "./constants/useForFun";
import useAtWorkList from "./constants/useAtWork";

export const Stats = () => {
  return (
    <div className={classNameStats.stats}>
      <Reveal>
        <div>
          <h4 className={classNameStats.statsTitle}>
            <AiFillCode className={classNameStats.statsIcon} />
            <span>Use at work</span>
          </h4>
          <div className={classNameStats.statsGrid}>
            {useAtWorkList.map((skill) => (
              <Chip key={skill} className={classNameStats.statsChip}>
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className={classNameStats.statsTitle}>
            <AiFillSmile className={classNameStats.statsIcon} />
            <span>Use for fun</span>
          </h4>
          <div className={classNameStats.statsGrid}>
            {useForFunList.map((skill) => (
              <Chip key={skill} className={classNameStats.statsChip}>
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
