import { rootApi } from '../../core/redux/api';
import { AuthenticateDto, OtpDto, PatientInputDto, UserDto } from './dtos';

export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        authenticate: builder.mutation<String, AuthenticateDto>({
            query: payload => ({
                url: `/PatientPortal/Gen_OTP?DeviceID=${payload.deviceId}&PhoneNo=${payload.mobile}&operatorCode=${payload.operator}`,
                method: 'POST',
            }),
        }),
        verify: builder.mutation<UserDto[], OtpDto>({
            query: payload => ({
                url: `/PatientPortal/Login?DeviceID=${payload.deviceId}&PhoneNo=${payload.mobile}&OTP=${payload.otp}&PushToken=${payload.pushToken}`,
                method: 'POST',
            }),
            transformResponse: (response: any) => {
                return response.Table;
            },
        }),
        getPatients: builder.query<UserDto[], string>({
            query: phone => ({
                url: `/PatientPortal/GetPatientList?PhoneNo=${phone}`,
                method: 'GET',
            }),
            transformResponse: (response: any) => {
                if (response !== undefined && response.Table !== undefined) {
                    console.log('R>E>S', response);
                    return response.Table;
                }
            },
            providesTags: ['patient-list'],
        }),
        selectPatient: builder.mutation<String, PatientInputDto>({
            query: payload => ({
                url: `/PatientPortal/SetDefaultPatient?PhoneNo=${payload.mobile}&MRNO=${payload.mrNo}`,
                method: 'POST',
            }),
            transformResponse: (response: any) => {
                if (response !== undefined && response.Table !== undefined) {
                    return response.Table[0];
                }
            },
        }),
    }),
});

export const {
  useAuthenticateMutation,
  useVerifyMutation,
  useGetPatientsQuery,
  useLazyGetPatientsQuery,
  useSelectPatientMutation,
} = authApi;
