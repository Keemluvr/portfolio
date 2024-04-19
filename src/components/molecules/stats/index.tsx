import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { classNameStats } from "./style";
import { useMemo } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import { Chip } from "@nextui-org/react";
import useForFunList from "./constants/useForFun";
import useAtWorkList from "./constants/useAtWork";

export const Stats = () => {
  const useAtWork = useMemo(() => useAtWorkList, []);
  const useForFun = useMemo(() => useForFunList, []);
  const styles = useMemo(() => classNameStats, []);

  return (
    <div className={styles.stats}>
      <Reveal>
        <div>
          <h4 className={styles.statsTitle}>
            <AiFillCode className={styles.statsIcon} />
            <span>Use at work</span>
          </h4>
          <div className={styles.statsGrid}>
            {useAtWork.map((skill) => (
              <Chip key={skill} className={styles.statsChip}>
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className={styles.statsTitle}>
            <AiFillSmile className={styles.statsIcon} />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statsGrid}>
            {useForFun.map((skill) => (
              <Chip key={skill} className={styles.statsChip}>
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
