import ComponentCard from "../../Components/common/ComponentCard";
import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import PageMeta from "../../Components/common/PageMeta";
import Button from "../../Components/ui/button/Button";
import { BoxIcon } from "../../icons";

export default function Buttons() {
  return (
    <div>
      <PageMeta
        title="React.js Buttons Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Buttons Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Buttons" />
      <div className="space-y-5 sm:space-y-6">
        {/* Primary Button */}
        <ComponentCard title="Primary Button">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              Button Text
            </Button>
            <Button size="md" variant="primary">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Primary Button with Left Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Primary Button with Right Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button */}
        <ComponentCard title="Secondary Button">
          <div className="flex items-center gap-5">
            {/* Outline Button */}
            <Button size="sm" variant="outline">
              Button Text
            </Button>
            <Button size="md" variant="outline">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Outline Button with Left Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Outline Button with Right Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="outline"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
