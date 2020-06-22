import { shallowMount, Wrapper } from "@vue/test-utils";
import WizardDialog from "@/containers/wizard-dialog/WizardDialog.vue";
import { itemMock } from "../mock/product.mock";


describe("WizardDialog.vue", () => {
    it("should render", () => {
        expect(typeof WizardDialog).toBeTruthy();
    });

    it("should be able to show previewMode", () => {
        const wrapper: Wrapper<any> = shallowMount(WizardDialog);
        wrapper.setData({
            previewMode: false,
            addFormData: { name: "some name" }
        });
        const { vm } = wrapper;

        expect(vm.previewMode).toBeFalsy();
        vm.togglePreviewMode();
        expect(vm.previewMode).toBeTruthy();
        expect(vm.addFormData && vm.previewMode).toBeTruthy();
    });

    it("should be able to show editMode", () => {
        const wrapper: Wrapper<any> = shallowMount(WizardDialog);
        const { vm } = wrapper;

        wrapper.setData({
            previewMode: true,
            editFormData: itemMock
        });

        expect(vm.addFormData && vm.previewMode).toBeTruthy();
    });

    it("should clear the form after a dialog is submitted or cancelled", () => {
        const data = {
            editFormData: itemMock,
            previewMode: true,
            addFormData: itemMock,
            isFormValid: true
        };

        const wrapper: Wrapper<any> = shallowMount(WizardDialog, {
            propsData: data
        });

        const { vm } = wrapper;
        const { editFormData, addFormData, isFormValid, previewMode } = vm;

        vm.clearForm();

        const expectation = {
            editFormData,
            addFormData,
            isFormValid,
            previewMode
        };

        expect(expectation).toEqual({
            editFormData: {},
            addFormData: {},
            isFormValid: false,
            previewMode: false
        });
    });
});
