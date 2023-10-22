import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { auditItemValidationSchema } from 'validationSchema/audit-items';
import { AuditInterface } from 'interfaces/audit';
import { AuditItemInterface } from 'interfaces/audit-item';

function AuditItemCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: AuditItemInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.audit_item.create({ data: values as RoqTypes.audit_item });
      resetForm();
      router.push('/audit-items');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AuditItemInterface>({
    initialValues: {
      item_name: '',
      item_status: '',
      item_description: '',
      audit_id: (router.query.audit_id as string) ?? null,
    },
    validationSchema: auditItemValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Audit Items',
              link: '/audit-items',
            },
            {
              label: 'Create Audit Item',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Audit Item
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.item_name}
            label={'Item Name'}
            props={{
              name: 'item_name',
              placeholder: 'Item Name',
              value: formik.values?.item_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.item_status}
            label={'Item Status'}
            props={{
              name: 'item_status',
              placeholder: 'Item Status',
              value: formik.values?.item_status,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.item_description}
            label={'Item Description'}
            props={{
              name: 'item_description',
              placeholder: 'Item Description',
              value: formik.values?.item_description,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<AuditInterface>
            formik={formik}
            name={'audit_id'}
            label={'Select Audit'}
            placeholder={'Select Audit'}
            fetcher={() => roqClient.audit.findManyWithCount({})}
            labelField={'audit_summary'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/audit-items')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'audit_item',
    operation: AccessOperationEnum.CREATE,
  }),
)(AuditItemCreatePage);
