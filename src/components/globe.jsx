import IconCloud from "./ui/icon-cloud";

const slugs = [
  "r",
  "python",
  "sql",
  "tableau",
  "latex",
  "github",
  "git",
  "visualstudiocode",
  "markdown",
  "jupyter",
  "numpy",
  "pandas"
];


function IconCloudDemo() {
  return (
    <div className="relative flex max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
