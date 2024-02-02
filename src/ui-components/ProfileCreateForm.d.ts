/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfileCreateFormInputValues = {
    name?: string;
    organization?: string;
    imageUrl?: string;
    country?: string;
    phoneNumber?: string;
    job?: string[];
    age?: number;
    birth?: string;
};
export declare type ProfileCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    organization?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    job?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    birth?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCreateFormOverridesProps = {
    ProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    organization?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    job?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfileCreateFormInputValues) => ProfileCreateFormInputValues;
    onSuccess?: (fields: ProfileCreateFormInputValues) => void;
    onError?: (fields: ProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileCreateFormInputValues) => ProfileCreateFormInputValues;
    onValidate?: ProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileCreateForm(props: ProfileCreateFormProps): React.ReactElement;
